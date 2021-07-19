import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const Window = styled.div`
    width: 496px;
    height: 684px;
    background: #F5F7FA;
    border-radius: 8px;
`

export const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #DDDDDD',
    },
    indicator: {
      backgroundColor: '#2E1AAD',
    },

  })(Tabs);
  
export const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      marginRight: theme.spacing(4),
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      '&$selected': {
        color: '#2E1AAD',
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);