import React, { useEffect, useState } from "react"
import styled from "styled-components"
import DrawerMenu from "../components/DrawerMenu/DrawerMenu"
import Header, { HeaderI } from "../components/Header/Header"
import HeaderMobile, { HeaderMobileI } from "../components/HeaderMobile/HeaderMobile"
import SidebarMenu from "../components/SidebarMenu/SidebarMenu"
import axios from "../axios/axios"
import { IProject, IUser } from "../interfaces/interface"
interface DesktopContainerI extends HeaderI {
    children: React.ReactNode,
    createProject: () => void,
    user: IUser
}

export const DesktopContainer: React.FunctionComponent<DesktopContainerI> = ({
    children,
    title,
    createProject,
    user
}: DesktopContainerI) => {

    const [projects,setProjects] = useState<IProject[]>([])

    const getAllProject = async () => {
        const result = await axios.get(`/user-project/${user.id}`)
        setProjects(result.data.projects)
    }

    useEffect(() => {
        if(user.id !== 0){
            getAllProject()
        }
    }, [user.id === 0])

    return (
        <ContainerDesktop>
            <SidebarMenu createProject={createProject} projects={projects} user={user}/>
            <Main>
                <Header title={title} />
                {children}
            </Main>
        </ContainerDesktop>
    )
}

const ContainerDesktop = styled.div`
    display:grid;
    grid-template-columns: fit-content(100%) 1fr;
    
    @media screen and (max-width: 1024px){
        display:none;
    }
    
`

const Main = styled.div`
    display:grid;
    grid-template-rows: fit-content(100%) fit-content(100%);
`

interface MobileContainerI extends HeaderMobileI {
    children: React.ReactNode
}

export const MobileContainer: React.FunctionComponent<MobileContainerI> = ({
    children,
    title,

}: MobileContainerI) => {

    const [animation, setAnimation] = useState<string>("slideIn")
    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    const activeDrawer = (): void => {
        setAnimation("slideIn")
        setShowDrawer(true)
    }

    const disableDrawer = (): void => {
        setAnimation("slideOut")
        setTimeout(() => {
            setShowDrawer(false)
        }, 500)
    }

    return (
        <>
            <DrawerMenu active={showDrawer} animation={animation} setShowDrawer={disableDrawer} />
            <ContainerMobile>
                <HeaderMobile title={title} activeDrawer={activeDrawer} />
                <ChildrenContainer>
                    {children}
                </ChildrenContainer>
            </ContainerMobile>
        </>
    )
}

const ContainerMobile = styled.div`
    display:grid;
    row-gap: 24px;

    @media screen and (min-width: 1024px){
        display:none;
    }
`

const ChildrenContainer = styled.div`
    display:grid;
    row-gap: 24px;
`

export const BodyContainer = styled.div`
    display:grid;
    row-gap: 24px;
    padding: 24px;
`

