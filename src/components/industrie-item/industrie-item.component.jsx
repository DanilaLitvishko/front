import React from 'react'
import { Industrie, RemoveButtonContainer, TextContainer } from './industrie-item.styles'

const IndustrieItem = (props) => {
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
