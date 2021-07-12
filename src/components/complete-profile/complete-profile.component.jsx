import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useFormik } from 'formik'
import {useSelector} from 'react-redux'
import axios from 'axios'

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

    const formik = useFormik({
        initialValues:{
            name: '',
            companyName: '',
            phoneNumber: '',
        },
        onSubmit: async ({name, companyName, phoneNumber}) => {
            const bodyParameters = {
                name,
                companyName,
                phoneNumber,
                specialities: userIndustries,
                industries: userSpecialities,
            }
            const config = {
                headers: {  Authorization: `Bearer ${currentUser}` }
            }
            console.log(bodyParameters)
            const response = await axios.post('http://localhost:3001/user-info', bodyParameters, config)
            console.log(response)
        },
        validationSchema: CompleteProfileSchema,
    })

    const {handleSubmit, handleChange, values:{name, companyName, phoneNumber}} = formik;

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
                    {...formik.getFieldProps('name')}
                    variant="outlined"
                    error={Boolean(formik.errors.name)}
                    helperText={formik.errors.name}
                />
                <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    onChange={handleChange}
                    value={companyName}
                    placeholder="Company name"
                    {...formik.getFieldProps('companyName')}
                    variant="outlined"
                    error={Boolean(formik.errors.companyName)}
                    helperText={formik.errors.companyName}
                />
                <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={handleChange}
                    value={phoneNumber}
                    placeholder="Phone number"
                    {...formik.getFieldProps('phoneNumber')}
                    variant="outlined"
                    error={Boolean(formik.errors.phoneNumber)}
                    helperText={formik.errors.phoneNumber}
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