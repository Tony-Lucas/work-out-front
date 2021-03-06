import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react"
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
            <SearchIcon color={Styles["Gray-500"].value} />
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

export const EditableInput: React.FunctionComponent<InputI> = ({ label,
    placeholder,
    type,
    onChange,
    id,
    value, }: InputI) => {
    return (
        <Editable value={value} onChange={(e) => onChange(e)} placeholder={placeholder} />
    )
}

const Editable = styled.input`
    font-size: 1.25em;
    color: ${Styles.Black.value};
    font-family: Montserrat-Bold;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
`

export const ProfileImageInput: React.FunctionComponent<any> = (props: any) => {

    const [tempImgUrl, setTempImgUrl] = useState<any>(props.imgUrl)

    const onChange = (e: any): void => {
        props.setUserData({ ...props.userData, img: e.target.files[0] })
        const urlTemp = URL.createObjectURL(e.target.files[0])
        setTempImgUrl(urlTemp)
    }

    return (
        <>
            <LabelImage id="myLabel" htmlFor="image-input" properties={props} tempImgUrl={tempImgUrl} />
            <ImageInput id="image-input" onChange={(e: any) => onChange(e)} />
        </>
    )
}

const ImageInput = styled.input.attrs({ type: "file" })`
    display:none;
`

const LabelImage = styled.label<{ properties: any, tempImgUrl: string }>`
    background-image: url(${props => props.tempImgUrl || "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"});
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    width: ${props => props.properties.width}px;
    height: ${props => props.properties.height}px;
    border-radius: 500px;
    cursor: pointer;
`
