import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useFormik } from 'formik'
import {useSelector} from 'react-redux'

import IndustrieItem from '../industrie-item/industrie-item.component'
import { AddPosition, Input, Label, SaveButton, SaveTextInButton, UpdateText, Window } from './complete-profile.styles'
import CompleteProfileSchema from './complete-profile.validation-schema';
import DialogPopup from '../dialog/dialog.component'
import { selectCurrentUser } from '../../redux/user/user.selectors';

const CompleteProfile = (props) => {

    const currentUser = useSelector(selectCurrentUser);

    console.log(currentUser)

    const {industries, specialities} = props;

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [userSpecialities, setUserSpecialities] = useState([]);
    const [userIndustries, setUserIndustries] = useState([]);
  
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = (value) => {
        setOpen(false);
        if(value){
            setUserSpecialities([...userSpecialities, value])
        }
    };
    
    const handleClearClick = (value) =>{
        const arr = userIndustries.filter(item => item.id !== value.id)
        setUserIndustries(arr);
    }

    const {industries, specialities} = props;

const CompleteProfile = () => {
    const {handleSubmit, handleChange, values:{name, companyName, phoneNumber, industrie}, errors, getFieldProps} = useFormik({
        initialValues:{
            name: '',
            companyName: '',
            phoneNumber: '',
        },
        onSubmit: ({name, companyName, phoneNumber}) => {
            const obj = {
                name,
                companyName,
                phoneNumber,
                userIndustries,
                userSpecialities,
            }
            console.log(obj)
        },
        validationSchema: CompleteProfileSchema,
    })
<<<<<<< HEAD
=======

    const {handleSubmit, handleChange, values:{name, companyName, phoneNumber}} = formik;

>>>>>>> finished developing front of complete-profile
    return (
        <Window>
            <form onSubmit={handleSubmit} style={{padding:'20px', margin:'10px'}}>
                <UpdateText>Update  your profile</UpdateText>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={name}
                    placeholder="Your name"
                    {...getFieldProps('name')}
                    variant="outlined"
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                />
                <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    onChange={handleChange}
                    value={companyName}
                    placeholder="Company name"
                    {...getFieldProps('companyName')}
                    variant="outlined"
                    error={Boolean(errors.companyName)}
                    helperText={errors.companyName}
                />
                <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={handleChange}
                    value={phoneNumber}
                    placeholder="Phone number"
                    {...getFieldProps('phoneNumber')}
                    variant="outlined"
<<<<<<< HEAD
                    error={Boolean(errors.phoneNumber)}
                    helperText={errors.companyName}
=======
                    error={Boolean(formik.errors.phoneNumber)}
                    helperText={formik.errors.phoneNumber}
>>>>>>> finished developing front of complete-profile
                />
                <Label>Specialities</Label>
                {
                    userSpecialities.map(specialitiy=> (
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
                        industries.length &&
                        <Autocomplete
                            freeSolo
                            id="autocompleteIndustries"
                            disableClearable
                            options={industries.map(industrie => industrie.name)}
                            onChange={(event, newValue) => { 
                                const value = industries.find((industrie) => {return industrie.name===newValue})
                                setUserIndustries([...userIndustries, value])
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
                            userIndustries.map(item => 
                                <IndustrieItem key={item.id} industrie={item} onDelete={handleClearClick}/>
                            )
                        }
                    </div>
                <DialogPopup selectedValue={selectedValue} open={open} onClose={handleClose} specialities={specialities}/>
                <SaveButton type="submit" disabled={formik.isSubmitting}><SaveTextInButton>Save</SaveTextInButton></SaveButton>
            </form>
        </Window>
    )
}

export default CompleteProfile