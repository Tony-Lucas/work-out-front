import React from "react"
import { BodyContainer, DesktopContainer, MobileContainer } from "../../layout/layout"
import styled from "styled-components"
import { Input, SearchInput } from "../../components/Inputs/Inputs"
import { ButtonSmallIcon } from "../../components/Buttons/Buttons"
import Styles from "../../styles.json"
import { PlusIcon } from "../../assets/icons/Icons"
import Task from "../../components/Task/Task"
import { useSprings, animated } from 'react-spring'

export default function MyTasks() {
    return (
        <>
            <DesktopContainer title="My tasks">
                <BodyContainer>
                    <ToolContainer>
                        <SearchInput onChange={() => null}/>
                        <ButtonSmallIcon onClick={() => null}>Nova Tarefa</ButtonSmallIcon>
                    </ToolContainer>
                    <TasksContainer>
                        <TaskColumn>
                            <TitleColumn>To Do</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value}/> Nova Tafera</NewTask>
                            <Task/>
                        </TaskColumn>
                        <TaskColumn>
                            <TitleColumn>Doing</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value}/> Nova Tafera</NewTask>
                        </TaskColumn>
                        <TaskColumn>
                            <TitleColumn>Done</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value}/> Nova Tafera</NewTask>
                        </TaskColumn>
                        <TaskColumn>
                            <TitleColumn>Review</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value}/> Nova Tafera</NewTask>
                        </TaskColumn>
                    </TasksContainer>
                </BodyContainer>
            </DesktopContainer>
            <MobileContainer title="My tasks">

            </MobileContainer>
        </>
    )
}

const ToolContainer = styled.div`
    display:grid;
    grid-template-columns: fit-content(100%) fit-content(100%);
    justify-content:space-between;
    align-items:center;
`

const TasksContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
`

const TaskColumn = styled.div`
    display:grid;
    padding: 24px;
    row-gap: 16px;
    background-color: #FBFBFB;
    border-radius: 5px;
    border: 1px solid ${Styles["Gray-0"].value};
`

const TitleColumn = styled.span`
    font-family: Montserrat-Semibold;
    font-size: 1.125em;
`

const NewTask = styled.span`
    display:grid;
    grid-template-columns: fit-content(100%) 1fr;
    font-family: Montserrat-Medium;
    color: ${Styles["Primary-500"].value};
    cursor: pointer;
`

