import React, { useState } from "react"
import styled from "styled-components"
import DrawerMenu from "../components/DrawerMenu/DrawerMenu"
import Header, { HeaderI } from "../components/Header/Header"
import HeaderMobile, { HeaderMobileI } from "../components/HeaderMobile/HeaderMobile"
import SidebarMenu from "../components/SidebarMenu/SidebarMenu"

interface DesktopContainerI extends HeaderI {
    children: React.ReactNode
}

export const DesktopContainer: React.FunctionComponent<DesktopContainerI> = ({
    children,
    title
}: DesktopContainerI) => {

    return (
        <ContainerDesktop>
            <SidebarMenu />
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

    const [animation,setAnimation] = useState<string>("slideIn")
    const [showDrawer,setShowDrawer] = useState<boolean>(false)

    const activeDrawer = (): void => {
        setAnimation("slideIn")
        setShowDrawer(true)
    }

    const disableDrawer = (): void => {
        setAnimation("slideOut")
        setTimeout(() => {
            setShowDrawer(false)
        },500)
    }

    return (
        <>
            <DrawerMenu active={showDrawer} animation={animation} setShowDrawer={disableDrawer}/>
            <ContainerMobile>
                <HeaderMobile title={title} activeDrawer={activeDrawer}/>
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

