import React, {useState, useEffect} from 'react'
import { useInfoFromBackend } from '../../hooks/useInfoFromBackend.hook';
import { OptionalInformation } from '../../interfaces/optional-information.interface';
import DialogPopup from '../dialog/dialog.component';
import SpecialityItem from './specialities-item.component';

import { 
    SpecialitiesContainer, 
    Heading,
    AngleText,
    ViewAllText,
    HeadingContainer,
} from './specialities.styles'

const Specialities = ({specialities} : {specialities: OptionalInformation[] | undefined}) => {

    const loadSpecialities = useInfoFromBackend('http://localhost:3001/specialities')

    const [userSpecialities, setUserSpecialities] = useState<OptionalInformation[] | undefined>(undefined);
    const [selectedValue, setSelectedValue] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = (value:OptionalInformation | null) => {
        setOpen(false);
        if(userSpecialities && value){
            setUserSpecialities([...userSpecialities, value])
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        setUserSpecialities(specialities)
    }, [specialities]);

    const check = (element:any, index:any, array:any) =>{

    }

    // useEffect(() => {
    //     if(loadSpecialities.data && userSpecialities){
    //         const arr = loadSpecialities.data.filter((item:OptionalInformation) => {
    //             const index = userSpecialities.findIndex(item);
    //             console.log(index)
    //         })
    //         console.log(userSpecialities)
    //         console.log(loadSpecialities.data)
    //         console.log(arr)
    //     }
    // }, [userSpecialities, loadSpecialities.data])

    const handleClearClick = (value:OptionalInformation) => {
        if(userSpecialities){
            const arr = userSpecialities.filter((item: OptionalInformation) => item.id !== value.id)
            setUserSpecialities(arr);
        }
    }

    return (
        <SpecialitiesContainer>
            <HeadingContainer>
                <Heading>
                    Specialities
                    <ViewAllText>View all</ViewAllText>
                </Heading>
                <AngleText style={{cursor: "pointer"}} onClick={handleClickOpen}>+Add</AngleText>
            </HeadingContainer>
            {
                userSpecialities && userSpecialities.map((item:OptionalInformation) => 
                    <SpecialityItem key={item.id} item={item} onDelete={handleClearClick}/>
                )
            }
            {
                userSpecialities && loadSpecialities.data?
                <DialogPopup 
                    selectedValue={selectedValue} 
                    open={open} 
                    onClose={handleClose} 
                    specialities={loadSpecialities.data}
                />
                :null
            }
        </SpecialitiesContainer>
    )
}

export default Specialities
