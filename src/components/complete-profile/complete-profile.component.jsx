import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useFormik } from 'formik'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { AddPosition, Input, Label, SaveButton, SaveTextInButton, UpdateText, Window, Industrie } from './complete-profile.styles'
import CompleteProfileSchema from './complete-profile.validation-schema';
import DialogPopup from './dialog.component'

const CompleteProfile = (props) => {

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

    const formik = useFormik({
        initialValues:{
            name: '',
            companyName: '',
            phoneNumber: '',
            industrie:''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: CompleteProfileSchema,
    })

    const handleClearClick = (id) =>{
        console.log(id)
    }

    const {handleSubmit, handleChange, values:{name, companyName, phoneNumber, industrie}} = formik;
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
                    helperText={formik.errors.companyName}
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
                                <Industrie key={item.id}>{item.name} &#10005;</Industrie>
                            )
                        }
                    </div>
                <DialogPopup selectedValue={selectedValue} open={open} onClose={handleClose} specialities={specialities}/>
                <SaveButton type="submit"><SaveTextInButton>Save</SaveTextInButton></SaveButton>
            </form>
        </Window>
    )
}

export default CompleteProfile