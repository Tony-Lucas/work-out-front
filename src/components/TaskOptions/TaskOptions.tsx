import React, { MouseEvent, useState } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"
import { PencilIcon, TrashIcon } from "../../assets/icons/Icons"

interface ITaskOptions{
    visible: boolean,
    onDelete: () => void
}

export default function TaskOptions(props: ITaskOptions){

    return(
        <>
        {
            props.visible ? 
            <Container>
                <ContainerOption>
                    <PencilIcon width="24" height="24"/>
                    <Option>Renomear</Option>
                </ContainerOption>
                <ContainerOption border={true} onClick={() => props.onDelete()}>
                    <TrashIcon width="24" height="24"/>
                    <Option>Deletar</Option>
                </ContainerOption>
                
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
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`
export const ContainerOption = styled.button<{border?: boolean}>`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 0;
    padding-left: 8px;
    border-top: ${props => props.border ? `1px solid ${Styles["Gray-100"].value}` : null};
`

export const Option = styled.span`
    font-size: 0.75em;
    color: ${Styles.Black.value};
    font-family: Montserrat-Semibold;
    text-align: start;
    cursor: pointer;
    padding: 8px 8px;
    width: 100%;
`
