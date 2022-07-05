import React, { DragEvent, useEffect, useState } from "react"
import { BodyContainer, DesktopContainer, MobileContainer } from "../../layout/layout"
import styled from "styled-components"
import { EditableInput, Input, SearchInput } from "../../components/Inputs/Inputs"
import { ButtonSmallIcon } from "../../components/Buttons/Buttons"
import Styles from "../../styles.json"
import { PlusIcon } from "../../assets/icons/Icons"
import Task, { TaskI } from "../../components/Task/Task"
import Modal from "../../components/Modal/Modal"
import { Select } from "../../components/SelectOption/Select"
import axios from '../../axios/axios';
import { IUser } from "../../interfaces/interface"

interface IMyTasks{
    user: IUser;
}

export default function MyTasks({user}: IMyTasks) {

    useEffect(()=>{
        axios.get(`/task/all/${user.id}`)
        .then(result => {
            console.log(result)
        })
    }, [])

    const [tasks, setTasks] = useState([{ title: "Tarefa alururu", id: 1 }, { title: "Tarefa alururu", id: 2 }, { title: "Tarefa alururu", id: 3 }])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [animation, setAnimation] = useState<string>('slide-in')
    const [taskIsDragging, setTaskIsDragging] = useState<number>()

    const [cardDown, setCardDown] = useState<any>()

    const onDragStart = (id: number) => {
        setTaskIsDragging(id)
    }

    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const taskDragging: any = document.querySelector(`#card-${taskIsDragging}`)
        e.currentTarget.appendChild(taskDragging)
    }

    const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const taskDragging: any = document.querySelector(`#card-${taskIsDragging}`)

    }

    const onDropCard = (e: any) => {
        e.preventDefault()
        const data = e.dataTransfer.getData("text")
        console.log(data)
    }

    return (
        <>
            <DesktopContainer title="My tasks">
                <BodyContainer>
                    <ToolContainer>
                        <SearchInput onChange={() => null} />
                        <ButtonSmallIcon onClick={() => null}>Nova Tarefa</ButtonSmallIcon>
                    </ToolContainer>
                    <TasksContainer>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)}>
                            <TitleColumn>To Do</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} />Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <Task title={task.title} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} />
                                )
                            })}
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDrop={(e: any) => onDropCard(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)}>
                            <TitleColumn>Doing</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)}>
                            <TitleColumn>Done</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)}>
                            <TitleColumn>Review</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                        </TaskColumn>
                    </TasksContainer>
                </BodyContainer>
            </DesktopContainer>
            <MobileContainer title="My tasks">
                <BodyContainer>
                    <ToolContainer>
                        <SearchInput onChange={() => null} />
                    </ToolContainer>
                    <TasksContainer>
                        <TaskColumn>
                            <TitleColumn>To Do</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} />Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <Task title={task.title} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={() => console.log("alurururu")}/>
                                )
                            })}
                        </TaskColumn>
                    </TasksContainer>
                </BodyContainer>
            </MobileContainer>
        </>
    )
}

const ToolContainer = styled.div`
    
    @media screen and (min-width: 1024px){
        display:grid;
        grid-template-columns: fit-content(100%) fit-content(100%);
        justify-content:space-between;
        align-items:center;
    }

    @media screen and (max-width: 1024px){
        display:grid;
        grid-template-columns: 1fr;
    }
`

const TasksContainer = styled.div`
   
    @media screen and (min-width: 1024px){
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 24px;
    }

    @media screen and (max-width: 1024px){
        display:grid;
        grid-template-columns: calc(100vw - 48px) calc(100vw - 48px) calc(100vw - 48px) calc(100vw - 48px);
        column-gap: 24px;
        height: fit-content;
    }
`

const TaskColumn = styled.div`
    display:grid;
    padding: 24px;
    row-gap: 16px;
    height: fit-content;
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

