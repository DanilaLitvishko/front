import React from 'react'
import Footer from '../footer/footer.component'
import Header from '../header/header.component'
import { Grid } from '@material-ui/core';

const Layout = (props) => {
    return (
        <Grid container spacing={3}>
            <Grid item container md={12}>
                <Header/>
            </Grid>
            <Grid item container md={12} justify="center">
                {props.children}
            </Grid>
            <Grid item container md={12} direction="column"><Footer/></Grid>
        </Grid>
    )
}

export default Layout
