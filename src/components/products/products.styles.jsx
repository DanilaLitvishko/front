import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  table: {
    height: 600,
    width: "100%",
    marginTop: "50px",
  },
});

export const Window = styled.div`
  width: 1110px;
  height: 946px;
  background: ${(props) => props.theme.color.blueWhite};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;
