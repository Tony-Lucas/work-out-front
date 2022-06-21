import React, { Children, ReactNode, useEffect } from "react"
import styled from "styled-components"
import { LoadIcon } from "../../assets/icons/Icons"
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