import { Container } from '@material-ui/core'
import React from 'react'
import Footer from '../footer/footer.component'
import Header from '../header/header.component'

const Layout = (props) => {
    return (
        <div style={{width: '100%'}}>
            <Header/>
                <Container>
                    {props.children}
                </Container>
            <Footer/>
        </div>
    )
}

export default Layout
