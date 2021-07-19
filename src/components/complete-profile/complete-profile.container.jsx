import React from 'react'
import CompleteProfile from './complete-profile.component'
import { useInfoFromBackend } from '../../hooks/useInfoFromBackend.hook';

const CompleteProfileContainer = () => {
    const loadIndustries = useInfoFromBackend('http://localhost:3001/industries')
    const loadSpecialities = useInfoFromBackend('http://localhost:3001/specialities')
    return (
        <div>
            {
                loadSpecialities.isLoading && loadIndustries.isLoading?<div>Loading...</div>
                :<CompleteProfile industries={loadIndustries.data} specialities={loadSpecialities.data}/>
            }
        </div>
    )
}

export default CompleteProfileContainer
