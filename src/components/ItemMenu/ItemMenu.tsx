import React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Styles from "../../styles.json"

interface ItemMenuI {
    icon: any,
    children: React.ReactNode,
    goTo: string
}



export default function ItemMenu({
    icon,
    children,
    goTo
}: ItemMenuI) {

    const navigate: NavigateFunction = useNavigate()
    
    return (
        <Button onClick={() => navigate(goTo)}>
            {icon}
            {children}
        </Button>
    )
}

const Button = styled.button`
    background-color: transparent;
    border: none;
    display: grid;
    height: fit-content;
    grid-template-columns: fit-content(100%) fit-content(100%);
    align-items: center;
    column-gap: 8px;
    font-family: Montserrat-Regular;
    color: ${Styles.Black.value};
    cursor: pointer;
    padding: 0;
    font-size: 1em;
`