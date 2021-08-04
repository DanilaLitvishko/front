import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import { StyledTabProps } from "../../interfaces/styled-tab-props";
import { MainTheme } from "../../interfaces/theme.interface";

const StyledTab = withStyles((theme: MainTheme) => ({
  root: {
    textTransform: "none",
    color: "black",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "14px",
    fontFamily: theme.fontFamily,
    fontStyle: theme.fontStyle,
    marginRight: theme.spacing(1),
    "&.MuiTab-textColorInherit.Mui-selected": {
      color: theme.color?.blue,
    },
  },
}))((props: StyledTabProps) => <Tab disableRipple {...props} />);

export default StyledTab;
