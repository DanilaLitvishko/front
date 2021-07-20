import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';
import { StyledTabsProps } from '../../interfaces/styled-tabs-props';

const StyledTabs = withStyles({
    indicator: {
        left:'0px',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
})((props:StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default StyledTabs;