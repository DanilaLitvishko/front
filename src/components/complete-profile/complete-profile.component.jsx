import React from 'react'
import { AddPosition, Input, Label, SaveButton, SaveTextInButton, UpdateText, Window } from './complete-profile.styles'
import { useFormik } from 'formik'
import CompleteProfileSchema from './complete-profile.validation-schema';

const CompleteProfile = () => {
    const {handleSubmit, handleChange, values:{name, companyName, phoneNumber, industrie}, errors, getFieldProps} = useFormik({
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
                    error={Boolean(errors.phoneNumber)}
                    helperText={errors.companyName}
                />
                <Label>Specialities</Label>
                <AddPosition>+ Add position</AddPosition>
                <Label>Industries</Label>
                <Input
                    placeholder="Start typing..."
                    id="industrie"
                    name="industrie"
                    type="text"
                    onChange={handleChange}
                    value={industrie}
                    {...getFieldProps('industrie')}
                    variant="outlined"
                    error={Boolean(errors.industrie)}
                    helperText={errors.companyName}
                />
                <SaveButton type="submit"><SaveTextInButton>Save</SaveTextInButton></SaveButton>
            </form>
        </Window>
    )
}

export default CompleteProfile
