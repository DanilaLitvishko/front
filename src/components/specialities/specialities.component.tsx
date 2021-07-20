import React, {useState} from 'react'
import { OptionalInformation } from '../../interfaces/optional-information.interface';
import SpecialityItem from './specialities-item.component';

import { 
    SpecialitiesContainer, 
    Heading,
    AngleText,
    ViewAllText,
    HeadingContainer,
} from './specialities.styles'

const Specialities = ({specialities} : {specialities: OptionalInformation[] | undefined}) => {

    const [userIndustries, setUserIndustries] = useState<OptionalInformation[] | undefined>(specialities);

    const handleClearClick = (value:OptionalInformation) => {
        if(userIndustries){
            const arr = userIndustries.filter((item: OptionalInformation) => item.id !== value.id)
            setUserIndustries(arr);
        }
    }

    return (
        <SpecialitiesContainer>
            <HeadingContainer>
                <Heading>
                    Specialities
                    <ViewAllText>View all</ViewAllText>
                </Heading>
                <AngleText>+Add</AngleText>
            </HeadingContainer>
            {
                specialities && specialities.map((item:OptionalInformation) => 
                    <SpecialityItem key={item.id} item={item} onDelete={handleClearClick}/>
                )
            }
        </SpecialitiesContainer>
    )
}

export default Specialities
