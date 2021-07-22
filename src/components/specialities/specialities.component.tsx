import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react'
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

const Specialities = ({specialities, userInfoId} : {specialities: OptionalInformation[] | undefined, userInfoId:string | undefined}) => {

    const loadSpecialities = useInfoFromBackend('http://localhost:3001/specialities')

    const [userSpecialities, setUserSpecialities] = useState<OptionalInformation[] | undefined>(undefined);
    const [selectedValue, setSelectedValue] = useState(null);
    const [openAddSpecialities, setOpenAddSpecialities] = useState(false);
    const [openViewAllSpecialities, setOpenViewAllSpecialities] = useState(false);
    const [addSpecialities, setAddSpecialities] = useState<OptionalInformation[] | undefined>(loadSpecialities.data)
    const stateRef: any = useRef();

    stateRef.current = {userInfoId, userSpecialities};

    const handleCloseAdd = (value:OptionalInformation | null) => {
        setOpenAddSpecialities(false);
        if(userSpecialities && value){
            setUserSpecialities([...userSpecialities, value])
        }
    };

    const handleClickOpenAdd = () => {
        setOpenAddSpecialities(true);
    };

    const handleCloseViewAll = () => {
        setOpenViewAllSpecialities(false)
    }

    const handleClickOpenViewAll = () => {
        setOpenViewAllSpecialities(true)
    }

    const handleClearClick = (value:OptionalInformation) => {
        if(userSpecialities){
            const arr = userSpecialities.filter((item: OptionalInformation) => item.id !== value.id)
            setUserSpecialities(arr);
        }
    }

    useEffect(() => {
        setUserSpecialities(specialities)
    }, [specialities]);

    useEffect(() => {
        if(loadSpecialities.data && userSpecialities){
            const arr = loadSpecialities.data.filter((item:OptionalInformation) => 
                userSpecialities.findIndex((spec) => spec.id === item.id) < 0
            )
            setAddSpecialities(arr)
        }
    }, [userSpecialities, loadSpecialities.data])
    
    useEffect(() => {
        return () => {
            console.log(stateRef)
            axios.post('http://localhost:3001/user-info/specialities', stateRef.current);
        }
    }, [])

    return (
        <SpecialitiesContainer>
            <HeadingContainer>
                <Heading>
                    Specialities
                    <ViewAllText style={{cursor: "pointer"}} onClick={handleClickOpenViewAll}>View all</ViewAllText>
                </Heading>
                <AngleText style={{cursor: "pointer"}} onClick={handleClickOpenAdd}>+Add</AngleText>
            </HeadingContainer>
            {
                userSpecialities && userSpecialities.map((item:OptionalInformation) => 
                    <SpecialityItem key={item.id} item={item} onDelete={handleClearClick}/>
                )
            }
            {
                addSpecialities?
                <DialogPopup 
                    selectedValue={selectedValue} 
                    open={openAddSpecialities} 
                    onClose={handleCloseAdd} 
                    specialities={addSpecialities}
                    title='Choose speciality'
                />
                :null
            }
            {
                userSpecialities?
                <DialogPopup 
                    selectedValue={selectedValue} 
                    open={openViewAllSpecialities} 
                    onClose={handleCloseViewAll} 
                    specialities={userSpecialities}
                    title='Your specialities'
                />
                :null
            }
        </SpecialitiesContainer>
    )
}

export default Specialities
