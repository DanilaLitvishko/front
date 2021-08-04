import styled from "styled-components";

export const HeadingContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Heading = styled.div`
  display: flex;
  margin-left: 24px;
  width: auto;
  height: 24px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.color.fontStyle};
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.redBlack};
`;

export const InvoicesContainer = styled.div`
  width: 589px;
  height: 272px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ViewAllText = styled.div`
  margin-left: 8px;
  width: 48px;
  height: 16px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.blue};
  margin-top: 5px;
  cursor: pointer;
`;

export const InvoicesLine = styled.div`
  width: 541px;
  height: 1px;
  background: ${(props) => props.theme.color.redGray};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  display: flex;
  width: auto;
  height: 22px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.color.fontStyle};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.color.redBlack};
  margin-right: 89px;
`;

export const DateContainer = styled.div`
  width: 77px;
  height: 22px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.color.fontStyle};
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => props.theme.color.grayBlue};
  margin-left: 116px;
  margin-right: 43px;
`;

export const MainContainer = styled.div`
  margin-left: 24px;
`;

export const InvoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
