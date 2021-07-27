import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';
import { StyledTabsProps } from '../../interfaces/styled-tabs-props';
import { MainTheme } from '../../interfaces/theme.interface';

const StyledTabs = withStyles((theme:MainTheme) => ({
	indicator: {
		left:'0px',
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		'& > span': {
			maxWidth: 40,
			width: '100%',
			backgroundColor: theme.color?.blue,
		},
	},
}))((props:StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default StyledTabs;