import React, { useState } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"

interface ITaskOptions{
    visible: boolean
}

export default function TaskOptions(props: ITaskOptions){

    return(
        <>
        {
            props.visible ? 
            <Container>
                <Option>Renomear</Option>
                <Option border={true}>Deletar</Option>
            </Container>
            :
            null
        }
        </>
        
    )
}

export const Container = styled.div`
    background-color: white;
    position: absolute;
    border-radius: 5px;
    width: fit-content;
    display: grid;
    right: 8px;
`
export const Option = styled.span<{border?: boolean}>`
    font-size: 0.75em;
    color: ${Styles.Black.value};
    font-family: Montserrat-Semibold;
    text-align: start;
    cursor: pointer;
    padding: 8px 12px;
    border-top: ${props => props.border ? `1px solid ${Styles["Gray-100"].value}` : null};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`
