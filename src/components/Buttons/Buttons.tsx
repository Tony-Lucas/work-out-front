import React, { Children, ReactNode, useEffect } from "react"
import styled from "styled-components"
import { LoadIcon, PlusIcon } from "../../assets/icons/Icons"
import Styles from "../../styles.json"

interface ButtonI {
    children?: React.ReactNode,
    onClick: () => void,
    loading?: boolean,
}


export const PrimaryMediumButton: React.FunctionComponent<ButtonI> = ({
    children,
    onClick,
    loading
}) => {

    useEffect(() => {
        console.log(children)
    }, [])

    return (
        <ButtonElement onClick={() => onClick()}>
            <>
                {!loading && (
                    <>
                        {children}
                    </>
                )}
                {loading && (
                    <>
                        <LoadIcon width="20" height="20" stroke="3" />
                    </>
                )}

            </>
        </ButtonElement>
    )
}

const ButtonElement = styled.button`
    height: 40px;
    background-color: ${Styles["Primary-500"].value};
    color: white;
    border:none;
    border-radius: 5px;
    font-family: Montserrat-Regular;
    cursor: pointer;
    font-size: 0.875em;
    
    &:hover{
        background-color: ${Styles["Primary-700"].value}; 
        transition: 0.4s;
    }
`

export const RegisterButton: React.FunctionComponent<ButtonI> = ({
    children,
    onClick,
    loading
}) => {
    return (
        <ButtonRegisterElement onClick={() => onClick()}>
            <>
                {!loading && (
                    <>
                        {children}
                    </>
                )}
                {loading && (
                    <>
                        <LoadIcon width="20" height="20" stroke="3" color={Styles["Gray-500"].value}/>
                    </>
                )}

            </>
        </ButtonRegisterElement>
    )
}

const ButtonRegisterElement = styled.button`
    height: 40px;
    background-color: white;
    border: 1px solid ${Styles["Gray-0"].value};
    color: #333333;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-size: 0.875em;
    font-family: Montserrat-Regular;
    cursor: pointer;
`

export const ButtonSmallIcon: React.FunctionComponent<ButtonI> = ({
    children,
    onClick,
    loading
}: ButtonI) => {
    return (
        <ButtonIconSmallElement onClick={onClick ? () => onClick() : () => null}>
            <>
                {!loading && (
                    <>
                        {children}
                        <PlusIcon color="white" width="18" height="18"/>
                    </>
                )}
                {loading && (
                    <>
                        <LoadIcon width="20" height="20" stroke="3" color={Styles["Gray-500"].value}/>
                    </>
                )}

            </>
        </ButtonIconSmallElement>
    )
}

const ButtonIconSmallElement = styled.button`
    display:grid;
    position: relative;
    grid-template-columns: fit-content(100%) fit-content(100%);
    column-gap: 4px;
    height: 32px;
    background-color: ${Styles["Primary-500"].value};
    color: white;
    border:none;
    border-radius: 5px;
    font-family: Montserrat-Regular;
    cursor: pointer;
    font-size: 0.75em;
    align-items:center;
    justify-content:center;
    padding: 0px 16px;
    
    &:hover{    
        background-color: ${Styles["Primary-700"].value}; 
        transition: 0.4s;
    }
`
