import React from 'react'
import { ListItemProps } from '../../interfaces/industrie-item-props.interface';
import { Industrie, RemoveButtonContainer, TextContainer } from './specialities-item.styles'

const SpecialityItem = ({ item, onDelete }:ListItemProps) => {
    const handleDelete = () => {
        onDelete(item)
    }
    return (
        <Industrie>
            <TextContainer>
                {item.name}
            </TextContainer>
            <RemoveButtonContainer onClick={handleDelete}>
                ✕
            </RemoveButtonContainer>
        </Industrie>
    )
}

export default SpecialityItem