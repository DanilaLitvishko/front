import React from "react";

import {
  SubscriptionContainer,
  Heading,
  SubscriptionLine,
  SubscriptionTextContainer,
  ButtonContainer,
  ManageCardDetailsContainer,
} from "./profile.styles";
import { makeStyles } from "@material-ui/core/styles";
import { useInfoFromBackend } from "../../hooks/useInfoFromBackend.hook";
import { useMutation } from "react-query";
import axios from "axios";

const useStyles = makeStyles({
  heading: {
    marginTop: "20px",
  },
});

const Subscription = () => {
  const classes = useStyles();
  const loadSubscription = useInfoFromBackend(
    "http://localhost:3001/payment/status"
  );
  const mutation = useMutation((status) =>
    axios.post("http://localhost:3001/payment/status", status)
  );

  const handleChangeStatus = () => {
    mutation.mutate(!loadSubscription.data);
  };

  return (
    <SubscriptionContainer>
      <Heading className={classes.heading}>Subscription</Heading>
      <SubscriptionLine />
      {mutation.data ? (
        <>
          {mutation.data.data.isSubscribing ? (
            <SubscriptionTextContainer>
              Active (£12 / month)
            </SubscriptionTextContainer>
          ) : (
            <SubscriptionTextContainer>
              Inactive (£12 / month)
            </SubscriptionTextContainer>
          )}
          <SubscriptionLine />
          {mutation.data.data.isSubscribing ? (
            <ButtonContainer onClick={handleChangeStatus}>
              Cancel Subscription
            </ButtonContainer>
          ) : (
            <ButtonContainer onClick={handleChangeStatus}>
              Subscribe
            </ButtonContainer>
          )}
        </>
      ) : (
        <>
          {loadSubscription.data ? (
            <SubscriptionTextContainer>
              Active (£12 / month)
            </SubscriptionTextContainer>
          ) : (
            <SubscriptionTextContainer>
              Inactive (£12 / month)
            </SubscriptionTextContainer>
          )}
          <SubscriptionLine />
          {loadSubscription.data ? (
            <ButtonContainer onClick={handleChangeStatus}>
              Cancel Subscription
            </ButtonContainer>
          ) : (
            <ButtonContainer onClick={handleChangeStatus}>
              Subscribe
            </ButtonContainer>
          )}
        </>
      )}
      <ManageCardDetailsContainer>
        Manage card details
      </ManageCardDetailsContainer>
    </SubscriptionContainer>
  );
};

export default Subscription;
