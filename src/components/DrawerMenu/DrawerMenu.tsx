import React from "react"
import Styles from "../../styles.json"
import styled, { keyframes } from "styled-components"
import ItemMenu from "../ItemMenu/ItemMenu"
import { MyTasksIcon } from "../../assets/icons/Icons"
import { ButtonSmallIcon } from "../Buttons/Buttons"

interface DrawerMenuI {
    animation?: string
    active: boolean,
    setShowDrawer: (bool: boolean) => void
}

export default function DrawerMenu({
    animation,
    active,
    setShowDrawer
}: DrawerMenuI) {
    return (
        <>
            {active && (
                <>
                    <DrawerContainer animation={animation}>
                        <Logo>LOGO</Logo>
                        <ItemMenu icon={<MyTasksIcon width="20" height="20" />} goTo="/dashboard/mytasks">My tasks</ItemMenu>
                        <ContainerLinks>
                            <ProjectTitle>Projetos</ProjectTitle>
                        </ContainerLinks>
                        <ButtonSmallIcon onClick={() => console.log("novo projeto")}>Novo projeto</ButtonSmallIcon>
                    </DrawerContainer>
                    <Background animation={animation} onClick={() => setShowDrawer(true)} />
                </>
            )}
        </>
    )
}

const DrawerContainer = styled.div<{ animation?: string }>`
    position: absolute;
    background-color: white;
    z-index: 10;
    top: 0;
    left: 0;
    padding: 24px;
    width: fit-content;
    height: 100vh;
    box-sizing:border-box;
    display:grid;
    row-gap: 32px;
    grid-template-rows: fit-content(100%) fit-content(100%) fit-content(100%) fit-content(100%);
    animation: ${props => props.animation === "slideIn" ? SlideIn : SlideOut} 0.5s forwards;

    @media screen and (min-width: 1024px){
        display:none;
    }
`

const SlideIn = keyframes`
    from{
        left: -350px;
    }
    to{
        left: 0px;
    }
`


const SlideOut = keyframes`
    from{
        left: 0;
    }
    to{
        left: -350px;
    }
`

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`

const Logo = styled.span`
    font-family: Montserrat-Bold;
    font-size: 1.125em;;
`

const ContainerLinks = styled.div`
    display:grid;
`

const ProjectTitle = styled.span`
    font-family: Montserrat-Medium;
    font-size: 1em;
    color: ${Styles.Black.value};
`

const Background = styled.div<{ animation?: string }>`
    background-color: rgba(196,203,212,0.5);
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
    position: absolute;
    animation: ${props => props.animation === "slideIn" ? fadeIn : fadeOut} 0.5s forwards;
`