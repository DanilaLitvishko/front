import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import {
    HeaderContainer,  
    OptionsContainer, 
    MenuItem, 
    ButtonsContainer,
    Line,
    LoginButton,
    Login,
    SignUpButton,
    SignUp,
    LogoContainer,
    LeftNav,
} from './header.styles'

const Header = () => {
    return(
    <div>
        <HeaderContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <LeftNav>
                <OptionsContainer>
                    <MenuItem>
                        Home
                    </MenuItem>
                    <MenuItem>
                        News
                    </MenuItem>
                    <MenuItem>
                        About
                    </MenuItem>
                </OptionsContainer>
            </LeftNav>
            <ButtonsContainer>
                <LoginButton><Login>Login</Login></LoginButton>
                <SignUpButton><SignUp>Sign up</SignUp></SignUpButton>
            </ButtonsContainer>
        </HeaderContainer>
        <Line/>
    </div>
)}

export default Header;