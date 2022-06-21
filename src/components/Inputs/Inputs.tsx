import React, { ChangeEvent } from "react"
import styled from "styled-components"
import Styles from "../../styles.json"

interface InputI {
    label?: string
    placeholder?: string,
    type?: string,
    onChange(e: ChangeEvent<HTMLInputElement>): void
}

export const Input: React.FunctionComponent<InputI> = ({
    label,
    placeholder,
    type,
    onChange
}: InputI) => {
    return(
        <ContainerInput>
            <Label>{label}</Label>
            <InputElement type={type || "text"} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}/>
        </ContainerInput>
    )
}

const ContainerInput = styled.div`
    display:grid;
    row-gap: 4px;
`

const InputElement = styled.input`
    background-color: #FBFBFB;
    height: 40px;
    border-radius: 5px;
    padding: 0px 12px;
    font-family: Montserrat-Regular;
    border: 1px solid transparent;

    &:focus{
        outline: none;
        border: 1px  solid ${Styles["Primary-500"].value};
        background-color: #fff;
        transition: 0.3s;
    }

    &:blur{
        outline: none;
        border: 1px solid transparent;
        transition: 0.3s;
    }
`

const Label = styled.span`
    font-family: Montserrat-Medium;
    color: black;
`