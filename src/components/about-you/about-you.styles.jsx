import styled from "styled-components";

export const AboutYouContainer = styled.div`
  margin-left: 32px;
  margin-right: 8px;
  width: 397px;
  height: 286px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.1);
  border-radius: 8px;
  display: flex;
  margin-bottom: -50px;
  flex-direction: column;
`;

export const HeadingContainer = styled.div`
  width: 100%;
  height: 54px;
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
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.redBlack};
`;

export const AngleText = styled.div`
  width: 26px;
  height: 20px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.blue};
  display: flex;
  margin-right: 39px;
`;

export const HeadingLine = styled.div`
  width: 349px;
  height: 1px;
  margin-left: 24px;
  margin-top: -20px;
  background: ${(props) => props.theme.color.grayWhite};
`;

export const PencilContainer = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

export const MainInfoContainer = styled.div`
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  margin-left: 24px;
  font-weight: normal;
  font-size: 14px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.redBlack};
  margin-bottom: 8px;
`;

export const Circle = styled.img`
  width: 64px;
  height: 64px;
  background: ${(props) => props.theme.color.grayRed};
  border-radius: 50%;
  margin-right: 20px;
`;

export const NameContainer = styled.div`
  width: 154px;
  height: 24px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.redBlack};
`;

export const StatusContainer = styled.div`
  width: 127px;
  height: 24px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.gray};
`;
