import React, { useState, useEffect } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import IndustrieItem from '../industrie-item/industrie-item.component'
import { AddPosition, Input, Label, SaveButton, UpdateText, UploadPhotoButton, Window } from './complete-profile.styles'
import CompleteProfileSchema from './complete-profile.validation-schema';
import DialogPopup from '../dialog/dialog.component'
import { sendUserInfo } from '../../redux/user/user.actions';
import { OptionalInformation } from '../../interfaces/optional-information.interface';
import { CompleteProfileProps } from '../../interfaces/complete-profile-props.interface';
import { CompleteProfileValues } from '../../interfaces/complete-profile-values.interface';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

const focusedColor = "orange";
const useStyles = makeStyles({
  root: {
    // input label when focused
    '&.Mui-focused': {
        outline: 'none'                                                          
    }
  },
  image:{
    width: '300px',
    height: '259px',

    background: '#FFFFFF',
    border: '1px solid #DDDDD',
    boxSizing: 'border-box',
    borderRadius: '8px',
  }
})

const CompleteProfile = ({industries, specialities} : CompleteProfileProps) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [userSpecialities, setUserSpecialities] = useState<OptionalInformation[]>([]);
    const [specialitiesForAdd, setSpecialitiesForAdd] = useState<OptionalInformation[]>(specialities)
    const [industriesForAdd, setIndustriesForAdd] = useState<OptionalInformation[]>(industries)
    const [userIndustries, setUserIndustries] = useState<OptionalInformation[]>([]);

    const [image, setImage] = useState<string>('')

    const onImageChange = (event:any) => {
        if (event.target.files && event.target.files[0]) {
          setImage(event.target.files[0].name)
        }
      };

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = (value:OptionalInformation | null) => {
        setOpen(false);
        if(value){
            setUserSpecialities([...userSpecialities, value])
        }
    };
    
    const handleClearClick = (value:OptionalInformation) =>{
        const arr = userIndustries.filter((item: OptionalInformation) => item.id !== value.id)
        setUserIndustries(arr);
    }

    const {handleSubmit, handleChange, values:{name, companyName, phoneNumber}, errors, getFieldProps, isSubmitting} = useFormik({
        initialValues:{
            name: '',
            companyName: '',
            phoneNumber: '',
        },
        onSubmit: ({name, companyName, phoneNumber}: CompleteProfileValues) => {
            const data = {
                name,
                companyName,
                phoneNumber,
                specialities: userSpecialities,
                industries: userIndustries,
                image
            }
            dispatch(sendUserInfo({data}))
        },
        validationSchema: CompleteProfileSchema,
    })

    useEffect(() => {
        setSpecialitiesForAdd(specialities)
    }, [specialities])

    useEffect(() => {
        setIndustriesForAdd(specialities)
    }, [industries])


    useEffect(() => {
        if(specialities){
            const arr = specialities.filter((item:OptionalInformation) => 
                    userSpecialities.findIndex((spec) => spec.id === item.id) < 0
            )
            setSpecialitiesForAdd(arr)
        }
    }, [userSpecialities])

    useEffect(() => {
        if(industries){
            const arr = industries.filter((item:OptionalInformation) => 
                userIndustries.findIndex((spec) => spec.id === item.id) < 0
            )
            setIndustriesForAdd(arr)
        }
    }, [userIndustries])
    
    return (
        <Window>
            <form onSubmit={handleSubmit} style={{padding:'20px', margin:'10px'}}>
                <UpdateText>Update  your profile</UpdateText>
                <div style={{'display':'flex', flexDirection:'row'}}>
                    <div style={{'display':'flex', flexDirection:'column'}}>
                        <Input
                            {...getFieldProps('name')}
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            value={name}
                            placeholder="Your name"
                            variant="outlined"
                            error={Boolean(errors.name)}
                            helperText={errors.name}
                        />
                        <Input
                            {...getFieldProps('companyName')}
                            id="companyName"
                            name="companyName"
                            type="text"
                            onChange={handleChange}
                            value={companyName}
                            placeholder="Company name"
                            variant="outlined"
                            error={Boolean(errors.companyName)}
                            helperText={errors.companyName}
                        />
                        <Input
                            {...getFieldProps('phoneNumber')}
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            onChange={handleChange}
                            value={phoneNumber}
                            placeholder="Phone number"
                            variant="outlined"
                            error={Boolean(errors.phoneNumber)}
                            helperText={errors.companyName}
                        />
                        <Label>Specialities</Label>
                    </div>
                    <div style={{'display':'flex', 'marginLeft':'69px'}}>
                        {
                            image?<img src={require(`../../assets/${image}`).default} style={{'display':'flex'}} className={classes.image}/>
                            :
                            <div style={{'display':'flex'}}>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    onChange={onImageChange}
                                />
                                <label htmlFor="raised-button-file">
                                    <UploadPhotoButton component="span" className={classes.image}>
                                        Upload you photo
                                    </UploadPhotoButton>
                                </label> 
                            </div>
                        }
                    </div>
                </div>
                {
                    userSpecialities.map((specialitiy:OptionalInformation)=> (
                        <Input
                            key={specialitiy.id}
                            type="text"
                            variant="outlined"
                            defaultValue={specialitiy.name}
                            className={classes.root}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    ))
                }
                <AddPosition style={{cursor: "pointer"}} onClick={handleClickOpen}>
                    + Add position
                </AddPosition>
                <Label>Industries</Label>
                    {                    
                        industriesForAdd &&
                        <Autocomplete
                            freeSolo
                            id="autocompleteIndustries"
                            disableClearable
                            options={industriesForAdd.map((industrie:OptionalInformation) => industrie.name)}
                            onChange={(event: React.ChangeEvent<{}>, newValue:string) => { 
                                const value = industriesForAdd.find((industrie:OptionalInformation) => industrie.name===newValue)
                                if(value){
                                    setUserIndustries([...userIndustries, value])
                                }
                            }}
                            renderInput={(params) => 
                                <Input
                                    {...params}
                                    placeholder="Start typing..."
                                    variant="outlined"
                                    InputProps={{ ...params.InputProps, type: 'text' }}
                                />
                            }
                        />
                    }
                    <div>
                        {
                            userIndustries.map((item:OptionalInformation) => 
                                <IndustrieItem key={item.id} item={item} onDelete={handleClearClick}/>
                            )
                        }
                    </div>
                <DialogPopup selectedValue={selectedValue} open={open} onClose={handleClose} specialities={specialitiesForAdd} title='Choose speciality'/>
                <SaveButton type="submit" disabled={isSubmitting}>Save</SaveButton>
            </form>
            <Link to='/profile'>Profile</Link>
        </Window>
    )
}

export default CompleteProfile;