import React from 'react'
import { AddPosition, Input, Label, SaveButton, SaveTextInButton, UpdateText, Window } from './complete-profile.styles'
import { useFormik } from 'formik'
import CompleteProfileSchema from './complete-profile.validation-schema';

const CompleteProfile = () => {
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
    return (
        <Window>
            <form onSubmit={formik.handleSubmit}>
                <UpdateText>Update  your profile</UpdateText>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Your name"
                    {...formik.getFieldProps('name')}
                    variant="outlined"
                    error={Boolean(formik.errors.name)}
                />
                <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                    placeholder="Company name"
                    {...formik.getFieldProps('companyName')}
                    variant="outlined"
                    error={Boolean(formik.errors.companyName)}
                />
                <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    placeholder="Phone number"
                    {...formik.getFieldProps('phoneNumber')}
                    variant="outlined"
                    error={Boolean(formik.errors.phoneNumber)}
                />
                <Label>Specialities</Label>
                <AddPosition>+ Add position</AddPosition>
                <Label>Industries</Label>
                <Input
                    placeholder="Start typing..."
                    id="industrie"
                    name="industrie"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.industrie}
                    {...formik.getFieldProps('industrie')}
                    variant="outlined"
                    error={Boolean(formik.errors.industrie)}
                />
                <SaveButton type="submit"><SaveTextInButton>Save</SaveTextInButton></SaveButton>
            </form>
        </Window>
    )
}

export default CompleteProfile
