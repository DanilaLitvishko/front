import React from 'react'

import { 
    AboutYouContainer, 
    Heading,
    AngleText,
    PencilContainer,
    HeadingContainer,
    HeadingLine,
    MainInfoContainer,
    TextContainer,
    Circle,
    NameContainer,
    StatusContainer,
  } from './about-you.styles'

  import { ReactComponent as Pencil } from '../../assets/pencil.svg'

const AboutYou = ({name, phoneNumber, email}) => {
    return (
        <AboutYouContainer>
            <HeadingContainer>
                <Heading>
                    About you
                </Heading>
                <AngleText>
                    <PencilContainer><Pencil/></PencilContainer>
                    Edit
                </AngleText>
            </HeadingContainer>
            <HeadingLine/>
            <MainInfoContainer>
                <Circle/>
                <div>
                    <NameContainer>{name}</NameContainer>
                    <StatusContainer>Top Headhunters</StatusContainer>
                </div>
            </MainInfoContainer>
            <TextContainer>Email: {email}</TextContainer>
            <TextContainer>Tel: {phoneNumber}</TextContainer>
        </AboutYouContainer>
    )
}

export default AboutYou
