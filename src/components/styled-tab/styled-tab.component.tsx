import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import { StyledTabProps } from '../../interfaces/styled-tab-props';

const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: 'black',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '14px',
      fontFamily: `${(props:any) => props.theme.fontFamily}`,
      fontStyle: `${(props:any) => props.theme.fontStyle}`,
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
}))((props: StyledTabProps) => <Tab disableRipple {...props} />);

export default StyledTab;  