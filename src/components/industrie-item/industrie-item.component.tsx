import React from "react";
import { ListItemProps } from "../../interfaces/industrie-item-props.interface";
import {
  Industrie,
  RemoveButtonContainer,
  TextContainer,
} from "./industrie-item.styles";

const IndustrieItem = ({ item, onDelete }: ListItemProps) => {
  const handleDelete = () => {
    onDelete(item);
  };
  return (
    <Industrie>
      <TextContainer>{item.name}</TextContainer>
      <RemoveButtonContainer onClick={handleDelete}>
        &#10005;
      </RemoveButtonContainer>
    </Industrie>
  );
};

export default IndustrieItem;
