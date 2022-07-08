import React, { FunctionComponent, useEffect, useState } from "react"
import { NavigateFunction, Navigator, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { GearIcon, MyTasksIcon, ProjectIcon } from "../../assets/icons/Icons"
import { IProject, IUser } from "../../interfaces/interface"
import Styles from "../../styles.json"
import Avatar from "../Avatar/Avatar"
import { ButtonSmallIcon } from "../Buttons/Buttons"
import ItemMenu from "../ItemMenu/ItemMenu"

interface ISidebarMenu {
    createProject: () => void,
    projects: IProject[],
    user: IUser
}

export default function SidebarMenu({ createProject, projects, user }: ISidebarMenu) {

    const navigate: NavigateFunction = useNavigate();

    return (
        <MainContainer>
            <Container>
                <Logo>LOGO</Logo>
                <ItemMenu icon={<MyTasksIcon width="20" height="20" />} goTo="/dashboard/mytasks">My tasks</ItemMenu>
                <ContainerLinks>
                    <ProjectTitle>Projetos</ProjectTitle>
                    {projects.length >= 0 && (
                        <>
                            {projects.map(item => {
                                return (
                                    <ProjectItem onClick={() => navigate(`/dashboard/${item.name}`)}><ProjectIcon width="20" height="20" />{item.name}</ProjectItem>
                                )
                            })}
                        </>
                    )}
                </ContainerLinks>
                <ButtonSmallIcon onClick={() => createProject()}>Novo projeto</ButtonSmallIcon>
            </Container>
            <PerfilContainer>
                <Avatar width="32" height="32" />
                <UserData>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                </UserData>
                <SettingsButton><GearIcon width="24"/></SettingsButton>
            </PerfilContainer>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display:grid;
    grid-template-rows: 1fr fit-content(100%);
    height: 100vh;
    border-right: 2px solid ${Styles["Gray-0"].value};
`

const PerfilContainer = styled.div`
    display:grid;
    grid-template-columns: fit-content(100%) 1fr fit-content(100%);
    padding: 16px;
    align-items:center;
    column-gap: 8px;
    border-top: 1px solid ${Styles["Gray-0"].value};
`

const UserData = styled.div`
    display:grid;
    row-gap: 2px;
`

const UserName = styled.span`
    font-size: 0.75em;
    font-family: Montserrat-Bold;
    color: ${Styles.Black.value};
`

const SettingsButton = styled.button`
    box-sizing: border-box;
    width: fit-content;
    height:fit-content;
    border:none;
    cursor: pointer;
    background-color: transparent;
`

const UserEmail = styled.span`
    font-size: 0.70em;
    font-family: Montserrat-Regular;
    color: ${Styles.Black.value};
`

const Container = styled.div`
    display:grid;
    row-gap: 24px;
    padding: 24px;
    
    box-sizing: border-box;
    
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
    row-gap: 16px;
`

const ProjectTitle = styled.span`
    font-family: Montserrat-Medium;
    font-size: 1em;
    color: ${Styles.Black.value};
`

const ProjectItem = styled.span`
    display:grid;
    align-items:center;
    column-gap: 4px;
    grid-template-columns: fit-content(100%) 1fr;
    font-family: Montserrat-Regular;
    font-size: 0.875em;
    color: ${Styles.Black.value};
    cursor:pointer;
`