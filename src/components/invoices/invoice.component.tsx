import React from "react";
import { ReactComponent as Vector } from "../../assets/vector.svg";
import { InvoiceProps } from "../../interfaces/invoice-props.interface";
import {
  InvoicesLine,
  Text,
  DateContainer,
  MainContainer,
  InvoiceContainer,
} from "./invoices.styles";

const Invoice = ({ date }: InvoiceProps) => {
  return (
    <MainContainer>
      <InvoicesLine />
      <InvoiceContainer>
        <Text>Subscription</Text>
        <Text>£12</Text>
        <DateContainer>{date}</DateContainer>
        <div>
          <Vector />
        </div>
      </InvoiceContainer>
    </MainContainer>
  );
};

export default Invoice;
