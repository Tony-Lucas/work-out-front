import React, { useState } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"
import { ArrowDownIcon } from "../../assets/icons/Icons";

export type priority = "Baixa" | "Média" | "Alta"
export type status = "To Do" | "Doing" | "Done" | "Review"
type defaultOption = "Selecione uma opção"

interface ISelect {
    label?: string;
    options: priority[] | status[],
    value: priority | status | defaultOption,
    onChange: (value: any) => void
}

export const Select = (props: ISelect) => {

    const [selected, setSelected] = useState<priority | status | defaultOption>(props.value || "Selecione uma opção")
    const [active, setActive] = useState(false)

    const onChange = (option: priority | status ) => {
        setSelected(option)
        setActive(false)
        props.onChange(option)
    }

    return (
        <Container active={active}>
            <Label>{props.label}</Label>
            <SelectHeader onClick={() => active ? setActive(false) : setActive(true)} active={active}>{selected}<button style={{cursor:"pointer"}}><ArrowDownIcon /></button></SelectHeader>
            {active && (
                <OptionsContainer active={active}>
                    {props.options.map(option => {
                        return(
                            <Option onClick={() => onChange(option)}>{option}</Option>
                        )
                    })}
                </OptionsContainer>
            )}
        </Container>
    )
}

const Container = styled.div<{active: boolean}>`
    display:grid;
    row-gap: 4px;
    position: relative;
    z-index: ${props => props.active ? "10" : "5"};
`
const Label = styled.span`
    font-size: 0.875em;
    font-family: Montserrat-Semibold;
    color: ${Styles.Black.value};
`

const SelectHeader = styled.span<{active: boolean}>`
    background-color: #FBFBFB;
    height: 40px;
    border-radius: 5px;
    padding: 0px 12px;
    font-family: Montserrat-Regular;
    display:grid;
    grid-template-columns: 1fr fit-content(100%);
    align-items:center;
    font-size: 0.875em;
    cursor:pointer;
    border: 1px solid transparent;
    user-select: none;

    button{
        background-color: transparent;
        box-sizing: border-box;
        border:none;
        transform: ${props => props.active ? "rotate(180deg)" : "rotate(0deg)"};
        transition: 0.5s;
    }
`

const OptionsContainer = styled.div<{active: boolean}>`
    display:grid;
    position: absolute;
    top: 64px;
    left: 0;
    background-color: #FBFBFB;
    border-radius: 5px;
    width: 100%;
    z-index: ${props => props.active ? "10" : "5"};
`

const Option = styled.span`
    font-size: 0.875em;
    font-family: Montserrat-Regular;
    color: ${Styles.Black.value};
    height: 40px;
    display:grid;
    align-items:center;
    padding: 0px 12px;
    cursor: pointer;
`



