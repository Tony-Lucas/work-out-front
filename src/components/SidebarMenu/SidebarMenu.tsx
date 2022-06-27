import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { MyTasksIcon } from "../../assets/icons/Icons"
import Styles from "../../styles.json"
import { ButtonSmallIcon } from "../Buttons/Buttons"
import ItemMenu from "../ItemMenu/ItemMenu"

export default function SidebarMenu(){
    return(
        <Container>
            <Logo>LOGO</Logo>
            <ItemMenu icon={<MyTasksIcon width="20" height="20"/>} goTo="/dashboard/mytasks">My tasks</ItemMenu>
            <ContainerLinks>
                <ProjectTitle>Projetos</ProjectTitle>
            </ContainerLinks>
            <ButtonSmallIcon onClick={() => console.log("novo projeto")}>Novo projeto</ButtonSmallIcon>
        </Container>
    )
}

const Container = styled.div`
    display:grid;
    row-gap: 24px;
    padding: 24px;
    height: 100vh;
    width: fit-content;
    box-sizing: border-box;
    border-right: 2px solid ${Styles["Gray-0"].value};
    grid-template-columns: 1fr;
    grid-template-rows: fit-content(100%) fit-content(100%) fit-content(100%);
    @media only screen and (max-width: 1024px){
        display:none;
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