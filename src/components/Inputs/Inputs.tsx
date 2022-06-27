import React, { ChangeEvent } from "react"
import styled from "styled-components"
import { SearchIcon } from "../../assets/icons/Icons"
import Styles from "../../styles.json"

interface InputI {
    label?: string
    placeholder?: string,
    type?: string,
    id?: string,
    value?: string,
    onChange(e: ChangeEvent<HTMLInputElement>): void,

}

export const Input: React.FunctionComponent<InputI> = ({
    label,
    placeholder,
    type,
    onChange,
    id,
    value,
}: InputI) => {
    return (
        <ContainerInput>
            <Label>{label}</Label>
            <InputElement value={value} id={id} type={type || "text"} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)} />
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

export const SearchInput: React.FunctionComponent<InputI> = ({
    label,
    placeholder,
    type,
    onChange,
    id,
    value,
}: InputI) => {
    return (
        <ContainerSearchInput>
            <SearchIcon color={Styles["Gray-500"].value}/>
            <InputSearch value={value} id={id} type={type || "text"} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)} />
        </ContainerSearchInput>
    )
}

const ContainerSearchInput = styled.div`
    display:grid;
    align-items:center;
    grid-template-columns: fit-content(100%) 1fr;
    height: 40px;
    border: 1px solid ${Styles["Gray-100"].value};
    border-radius: 5px;
    padding: 0px 12px;
`

const InputSearch = styled.input`

    border:none;
    background-color: white;
    padding-left: 8px;
    height: 80%;

    &:focus{
        outline: none;
    }
`