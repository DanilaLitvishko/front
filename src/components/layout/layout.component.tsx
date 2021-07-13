import React from 'react'
import Footer from '../footer/footer.component'
import Header from '../header/header.component'
import { Grid } from '@material-ui/core';
import { LayoutProps } from '../../interfaces/layout-props.interface';

const Layout = (props:LayoutProps) => {
    return (
        <Grid container spacing={3}>
            <Grid item container md={12}>
                <Header/>
            </Grid>
            <Grid item container md={12} justify="center">
                {props.children}
            </Grid>
            <Grid item container md={12} direction="column">
                <Footer/>
            </Grid>
        </Grid>
    )
}

export default Layout
