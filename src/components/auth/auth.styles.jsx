import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const Window = styled.div`
    width: 496px;
    height: 684px;
    background: ${props => props.theme.color.blueWhite};
    border-radius: 8px;
`

export const AntTabs = withStyles({
    root: {
      borderBottom: `1px solid ${props => props.theme.color.redWhite}`,
    },
    indicator: {
      backgroundColor: `${props => props.theme.color.blue}`,
    },

  })(Tabs);
  
export const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      marginRight: theme.spacing(4),
      fontFamily: `${props => props.theme.color.fontFamily}`,
      fontStyle: `${props => props.theme.color.fontStyle}`,
      fontWeight: 'bold',
      fontSize: '18px',
      '&$selected': {
        color: `${props => props.theme.color.blue}`,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
