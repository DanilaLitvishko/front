import styled from 'styled-components'
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export const Window = styled.div`
    width: 1110px;
    height: 946px;
    background: ${props => props.theme.color.blueWhite};
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    padding: 32px;
`

export const TabsContainer = styled.div`
    flex-direction: column;
    width: 200px;
    height: 151px;
    background: ${props => props.theme.color.white};
    box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.1);
    border-radius: 8px;
    display: flex;
`

export const HeadingContainer = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

export const Heading = styled.div`
    display: flex;
    margin-left: 24px;
    width: auto;
    height: 24px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.color.fontStyle};
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.redBlack};
`

export const SubscriptionContainer = styled.div`
    margin-left: 230px;
    margin-right: 21px;
    width: 200px;
    height: 272px;
    background: ${props => props.theme.color.white};
    box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`

export const InvoicesContainer = styled.div`
    width: 589px;
    height: 272px;
    background: ${props => props.theme.color.white};
    box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`

export const NotificationsContainer = styled.div`
    margin-top: -60px;
    margin-left: 230px;
    width: 810px;
    height: 221px;
    background: ${props => props.theme.color.white};
    box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding-left: 24px;
`

export const AngleText = styled.div`
    width: 26px;
    height: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.blue};
    display: flex;
    margin-right: 39px;
`

export const ViewAllText = styled.div`
    margin-left: 8px;
    width: 48px;
    height: 16px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    font-feature-settings: 'liga' off;
    color:  ${props => props.theme.color.blue};
    margin-top: 5px;
    cursor: "pointer";
`

export const NotificationLine = styled.div`
    margin-top: 7px;
    width: 762px;
    height: 1px;
    left: 453px;
    top: 858px;
    background: ${props => props.theme.color.grayWhite};
`

export const NotificationText = styled.div`
    margin-top: 10px;
    margin-bottom: 3px;
    height: 24px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.redBlack};
    display: flex;
`

export const LineContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SwitchContainer = styled.div`
    margin-top: 12px;
    margin-right: 50px;
`

export const SubscriptionLine = styled.div`
    width: 164px;
    height: 1px;
    background: ${props => props.theme.color.redGray};
    display: flex;
    margin-left: 18px;
    margin-top: 16px;
`

export const SubscriptionTextContainer = styled.div`
    width: 167px;
    height: 22px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.theme.color.redBlack};
    display: flex;
    margin-left: 23px;
    margin-top: 44px;
    margin-bottom: 27px;
`

export const ButtonContainer = styled(Button)`
    width: 164px;
    height: 35px;
    border: 1px solid ${props => props.theme.color.blue};
    box-sizing: border-box;
    border-radius: 6px;
    margin-left: 18px;
    margin-top: 19px;
    align-items: center;
    & .MuiButton-label{
        font-family: ${props => props.theme.fontFamily};
        font-style: ${props => props.theme.fontStyle};
        width: 133px;
        height: 22px;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        color: ${props => props.theme.color.blue};
    }
    &.MuiButton-root{
        text-transform: none;
    }
    &:hover{
        background-color: ${props => props.theme.color.white};
    }
`

export const HeadingLine = styled.div`
    width: 349px;
    height: 1px;
    margin-left: 24px;
    margin-top: -20px;
    background: ${props => props.theme.color.grayWhite};
`

export const ManageCardDetailsContainer = styled.div`
    margin-top: 10px;
    margin-left: 46px;
    width: 112px;
    height: 22px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    text-decoration-line: underline;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.redBlack};
`

export const InvoicesLine = styled.div`
  width: 541px;
  height: 1px;
  margin-top: -20px;
  margin-left: 24px;
  background: ${props => props.theme.color.redGray};
`

export const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
      overflow: 'visible',
    },
    switchBase: {
      padding: 3,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);