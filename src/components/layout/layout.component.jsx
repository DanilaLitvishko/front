import React from 'react'
import Footer from '../footer/footer.component'
import Header from '../header/header.component'

const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
