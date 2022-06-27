import React from "react"
import Styles from "../../styles.json"
import styled from "styled-components"
import { MenuIcon } from "../../assets/icons/Icons"

export interface HeaderMobileI{
    title: string
    activeDrawer?: () => void
}

export default function HeaderMobile({
    title,
    activeDrawer
}: HeaderMobileI){
    return(
        <Container>
            <MenuButton onClick={activeDrawer ? () => activeDrawer() : () => null}><MenuIcon width="28" height="28" color={Styles.Black.value}/></MenuButton>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.div`
    display:grid;
    grid-template-columns: fit-content(100%) 1fr;
    column-gap: 16px;
    padding: 18px 24px;
    align-items:center;
    border-bottom: 1px solid ${Styles["Gray-0"].value};

    @media screen and (min-width: 1024px){
        display:none;
    }
`

const MenuButton = styled.button`
    border:none;
    background-color: transparent;
    padding: 0px;
    margin:0px;
    box-sizing: border-box;
`

const Title = styled.span`
    font-size: 1.2em;
    font-family: Montserrat-Semibold;
    color: ${Styles.Black.value};
    margin-bottom: 4px;
`