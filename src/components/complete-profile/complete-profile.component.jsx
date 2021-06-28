import React from 'react'
import { AddPosition, Input, Label, UpdateText, Window } from './complete-profile.styles'

const CompleteProfile = () => {
    return (
        <Window>
            <UpdateText>Update  your profile</UpdateText>
            <Input
                variant="outlined"
            />
            <Input
                variant="outlined"
            />
            <Input
                variant="outlined"
            />
            <Label>Specialities</Label>
            <AddPosition>+ Add position</AddPosition>
            <Label>Industries</Label>
            <Input
                placeholder="Start typing..."
                variant="outlined"
            />
        </Window>
    )
}

export default CompleteProfile
