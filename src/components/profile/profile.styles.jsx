import styled from 'styled-components'
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

export const Window = styled.div`
    width: 1110px;
    height: 946px;
    background: #F5F7FA;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    padding: 32px;
`

export const TabsContainer = styled.div`
    flex-direction: column;
    width: 200px;
    height: 151px;
    background: #FFFFFF;
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
    font-family: Manrope;
    font-style: normal;
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
    background: #D6D6D6;
    display: flex;
    margin-left: 18px;
    margin-top: 16px;
`

export const SubscriptionTextContainer = styled.div`
    width: 157px;
    height: 22px;
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #231F20;
    display: flex;
    margin-left: 23px;
    margin-top: 44px;
    margin-bottom: 27px;
`

export const ButtonContainer = styled.button`
    width: 164px;
    height: 35px;
    border: 1px solid #2E1AAD;
    box-sizing: border-box;
    border-radius: 6px;
    margin-left: 18px;
    margin-top: 19px;
`

export const ButtonText = styled.div`
    width: 133px;
    height: 22px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #2E1AAD;
`

export const HeadingLine = styled.div`
    width: 349px;
    height: 1px;
    margin-left: 24px;
    margin-top: -20px;
    background: #EBEBEB;
`

export const ManageCardDetailsContainer = styled.div`
    margin-top: 10px;
    margin-left: 46px;
    width: 112px;
    height: 22px;
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    text-decoration-line: underline;
    font-feature-settings: 'liga' off;
    color: #231F20;
`

export const InvoicesLine = styled.div`
  width: 541px;
  height: 1px;
  margin-top: -20px;
  margin-left: 24px;
  background: #D6D6D6;
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