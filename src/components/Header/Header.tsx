import React from "react"
import styled from "styled-components"
import Styles from "../../styles.json"

export interface HeaderI {
    title?: string
}

export default function Header({
    title
}: HeaderI) {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.div`
    padding: 24px;
    border-bottom: 2px solid ${Styles["Gray-0"].value};

    @media screen and (max-width: 1024px){
        display:none;
    }
`

const Title = styled.span`
    font-family: Montserrat-Bold;
    font-size: 1.125em;
    color: ${Styles.Black.value};
`