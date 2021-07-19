import React from 'react'
import { IndustrieItemProps } from '../../interfaces/industrie-item-props.interface';
import { Industrie, RemoveButtonContainer, TextContainer } from './industrie-item.styles'

const IndustrieItem = (props:IndustrieItemProps) => {
    const { industrie, onDelete } = props;
    const handleDelete = () => {
        onDelete(industrie)
    }
    return (
        <Industrie>
            <TextContainer>
                {industrie.name}
            </TextContainer>
            <RemoveButtonContainer onClick={handleDelete}>
                &#10005;
            </RemoveButtonContainer>
        </Industrie>
    )
}

export default IndustrieItem
