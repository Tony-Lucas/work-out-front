import React, { ReactNode, useState } from "react"
import Styles from "../../styles.json"
import styled, {keyframes} from "styled-components"
import { CloseIcon } from "../../assets/icons/Icons";

interface IModal{
    children?: ReactNode;
    animation: string
}

export default function Modal(props: IModal){
    return(
        <Container>
            <Background animation={props.animation}/>
            <Main animation={props.animation}>
                <CloseButton>
                    <CloseIcon/>
                </CloseButton>  
                {props.children}
            </Main>
        </Container>
    )
}

const FadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const FadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`

const SlideIn = keyframes`
    from{
        margin-left: 100px;
        opacity: 0;
    }
    to{
        margin-left: 0;
        opacity: 1;
    }
`

const SlideOut = keyframes`
    from{
        right: 0;
    }
    to{
        right: 100px;
    }
`

const Background = styled.div<{animation: string}>`
 background-color: rgba(251,251,251,0.6);
 position: absolute;
 opacity: 0.3;
 width: 100vw;
 height: 100vh;
 top: 0;
 left: 0;
 z-index: 1;
 animation: ${props => props.animation === 'slide-in' ? FadeIn : FadeOut} 0.5s forwards;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`

const Main = styled.div<{animation: string}>`
    background-color: red;
    position: relative;
    border-radius: 5px;
    padding: 32px;
    z-index: 2;
    animation: ${props=> props.animation === 'slide-in' ? SlideIn : SlideOut} 0.5s forwards;
    min-width: 300px;
`

const CloseButton = styled.button`
    position: absolute;
    right: 12px;
    top: 12px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    box-sizing: border-box;
`