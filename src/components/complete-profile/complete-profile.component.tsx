import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import IndustrieItem from '../industrie-item/industrie-item.component'
import { AddPosition, Input, Label, SaveButton, SaveTextInButton, UpdateText, Window } from './complete-profile.styles'
import CompleteProfileSchema from './complete-profile.validation-schema';
import DialogPopup from '../dialog/dialog.component'
import { sendUserInfo } from '../../redux/user/user.actions';
import { OptionalInformation } from '../../interfaces/optional-information.interface';
import { CompleteProfileProps } from '../../interfaces/complete-profile-props.interface';
import { CompleteProfileValues } from '../../interfaces/complete-profile-values.interface';
import { Link } from 'react-router-dom';

const CompleteProfile = ({industries, specialities} : CompleteProfileProps) => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [userSpecialities, setUserSpecialities] = useState<OptionalInformation[]>([]);
    const [userIndustries, setUserIndustries] = useState<OptionalInformation[]>([]);
  
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
            }
            dispatch(sendUserInfo({data}))
        },
        validationSchema: CompleteProfileSchema,
    })
    
    return (
        <Window>
            <form onSubmit={handleSubmit} style={{padding:'20px', margin:'10px'}}>
                <UpdateText>Update  your profile</UpdateText>
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
                {
                    userSpecialities.map((specialitiy:OptionalInformation)=> (
                        <Input
                            key={specialitiy.id}
                            type="text"
                            variant="outlined"
                            defaultValue={specialitiy.name}
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
                        industries &&
                        <Autocomplete
                            freeSolo
                            id="autocompleteIndustries"
                            disableClearable
                            options={industries.map((industrie:OptionalInformation) => industrie.name)}
                            onChange={(event: React.ChangeEvent<{}>, newValue:string) => { 
                                const value = industries.find((industrie:OptionalInformation) => industrie.name===newValue)
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
                <DialogPopup selectedValue={selectedValue} open={open} onClose={handleClose} specialities={specialities}/>
                <SaveButton type="submit" disabled={isSubmitting}><SaveTextInButton>Save</SaveTextInButton></SaveButton>
            </form>
            <Link to='/profile'>Profile</Link>
        </Window>
    )
}

export default CompleteProfile;