import React, { ReactNode, useState } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"

interface ISelect{
    label?: string;
    options: string[]
}

export const Select = (props: ISelect) => {
    return(
        <Container>
            <Label>{props.label}</Label>
            <SelectOption>
                {
                    props.options.map(item =>{
                        return <option value={item}>{item}</option>
                    }) 
                }
            </SelectOption>
        </Container>
    )
}

const Container = styled.div`
    display:grid;
    row-gap: 4px;
`
const Label = styled.span`
    font-size: 0.875em;
    font-family: Montserrat-Semibold;
    color: ${Styles.Black.value};
`
const SelectOption = styled.select`
    background-color: #fbfbfb;
    padding: 12px;
    border: none;
    outline: none;
    font-size: 1em;
`