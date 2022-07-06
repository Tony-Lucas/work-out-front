import React, { DragEvent, useEffect, useState } from "react"
import { BodyContainer, DesktopContainer, MobileContainer } from "../../layout/layout"
import styled from "styled-components"
import { EditableInput, Input, SearchInput } from "../../components/Inputs/Inputs"
import { ButtonSmallIcon, PrimaryMediumButton } from "../../components/Buttons/Buttons"
import Styles from "../../styles.json"
import { PlusIcon } from "../../assets/icons/Icons"
import Task, { TaskI } from "../../components/Task/Task"
import Modal from "../../components/Modal/Modal"
import { Select } from "../../components/Select/Select"
import axios from '../../axios/axios';
import { ITask, IUser } from "../../interfaces/interface"

interface IMyTasks {
    user: IUser;
}

export default function MyTasks({ user }: IMyTasks) {

    useEffect(() => {
        if(user.id !== 0){
            axios.get(`/task/all/${user.id}`)
            .then(result => {
                setTasks(result.data.tasks)
            })
        }
    }, [user.id !== 0])

    const [tasks, setTasks] = useState<ITask[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [animation, setAnimation] = useState<string>('slide-in')
    const [taskIsDragging, setTaskIsDragging] = useState<number>(0)
    const [cardDown, setCardDown] = useState<any>()

    const [titleNewTask, setTitleNewTask] = useState<string>("")
    const [priorityNewTask, setPriorityNewTask] = useState<string>("")
    const [statusNewTask, setStatusNewTask] = useState<string>("")

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

    const onDropCard = (e: any,status: string,id: number) => {
        e.preventDefault()
        const data = e.dataTransfer.getData("text")
        axios.put(`/task`,{status: status,id: id}).then(result => {
            console.log(result)
        })
    }

    const createNewTask = (): void => {
        if (titleNewTask && priorityNewTask && statusNewTask) {
            axios.post(`/task`, { description: titleNewTask, priority: priorityNewTask, status: statusNewTask,userId: user.id }).then(result => {
                console.log(result)
            })
        }
    }

    const onDelete = (id: number) => {
        axios.delete(`/task/${id}`).then(result => {
            console.log(result)
        })
    }

    return (
        <>
            <DesktopContainer title="My tasks">
                <BodyContainer>
                    <ToolContainer>
                        <SearchInput onChange={() => null} />
                        <ButtonSmallIcon onClick={() => setShowModal(true)}>Nova Tarefa</ButtonSmallIcon>
                    </ToolContainer>
                    <TasksContainer>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)} onDrop={(e: any) => onDropCard(e,"To Do",taskIsDragging)}>
                            <TitleColumn>To Do</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} />Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <>
                                        {task.status === "To Do" && (
                                            <Task title={task.description} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} onDelete={() => onDelete(task.id)}/>
                                        )}
                                    </>
                                )
                            })}
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDrop={(e: any) => onDropCard(e,"Doing",taskIsDragging)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)}>
                            <TitleColumn>Doing</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <>
                                        {task.status === "Doing" && (
                                            <Task title={task.description} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} onDelete={() => onDelete(task.id)}/>
                                        )}
                                    </>
                                )
                            })}
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)} onDrop={(e: any) => onDropCard(e,"Done",taskIsDragging)}>
                            <TitleColumn>Done</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <>
                                        {task.status === "Done" && (
                                            <Task title={task.description} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} onDelete={() => onDelete(task.id)}/>
                                        )}
                                    </>
                                )
                            })}
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)} onDrop={(e: any) => onDropCard(e,"Review",taskIsDragging)}>
                            <TitleColumn>Review</TitleColumn>
                            <NewTask><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <>
                                        {task.status === "Review" && (
                                            <Task title={task.description} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} onDelete={() => onDelete(task.id)}/>
                                        )}
                                    </>
                                )
                            })}
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
                            
                        </TaskColumn>
                    </TasksContainer>
                </BodyContainer>
            </MobileContainer>
            {showModal && (
                <Modal animation={animation} setShow={setShowModal}>
                    <div style={{ display: "grid", rowGap: "16px" }}>
                        <EditableInput onChange={(e) => setTitleNewTask(e.target.value)} value={titleNewTask} placeholder="Sem Título" />
                        <Select options={[{ value: "Baixa", label: "Baixa" }, { value: "Média", label: "Média" }, { value: "Alta", label: "Alta" }]} label="Prioridade" value={priorityNewTask} onChange={(value: string) => setPriorityNewTask(value)} />
                        <Select options={[{ value: "To Do", label: "To Do" }, { value: "Doing", label: "Doing" }, { value: "Done", label: "Done" }, { value: "Review", label: "Review" }]} label="Status" value={statusNewTask} onChange={(value: string) => setStatusNewTask(value)} />
                        <PrimaryMediumButton onClick={() => createNewTask()}>Salvar</PrimaryMediumButton>
                    </div>
                </Modal>
            )}
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

