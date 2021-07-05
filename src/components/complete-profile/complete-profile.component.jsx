import React, {useEffect} from 'react'
import { AddPosition, Input, Label, SaveButton, SaveTextInButton, UpdateText, Window } from './complete-profile.styles'
import { useFormik } from 'formik'
import CompleteProfileSchema from './complete-profile.validation-schema';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';

const CompleteProfile = () => {
    let specialities;
    let industries;
    useEffect(async () => {
        specialities = await axios.get('http://localhost:3001/specialities')
        industries = await axios.get('http://localhost:3001/industries')
        console.log(specialities.data)
        console.log(industries.data)
    }, [specialities, industries])
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
    const {handleSubmit, handleChange, values:{name, companyName, phoneNumber, industrie}} = formik;
    return (
        <Window>
            <form onSubmit={handleSubmit}>
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
                <AddPosition>
                    <Fab color="inherit" aria-label="add" variant="extended">
                        <AddIcon />
                        Add position
                    </Fab>
                </AddPosition>
                <Label>Industries</Label>
                <Input
                    placeholder="Start typing..."
                    id="industrie"
                    name="industrie"
                    type="text"
                    onChange={handleChange}
                    value={industrie}
                    {...formik.getFieldProps('industrie')}
                    variant="outlined"
                    error={Boolean(formik.errors.industrie)}
                    helperText={formik.errors.companyName}
                />
                <SaveButton type="submit"><SaveTextInButton>Save</SaveTextInButton></SaveButton>
            </form>
        </Window>
    )
}

export default CompleteProfile
