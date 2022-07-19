import React, { Dispatch, DragEvent, SetStateAction, useEffect, useState } from "react"
import { BodyContainer, DesktopContainer, MobileContainer } from "../../layout/layout"
import styled from "styled-components"
import { EditableInput, Input, SearchInput } from "../../components/Inputs/Inputs"
import { ButtonSmallIcon, PrimaryMediumButton } from "../../components/Buttons/Buttons"
import Styles from "../../styles.json"
import { PlusIcon } from "../../assets/icons/Icons"
import Task, { TaskI } from "../../components/Task/Task"
import Modal from "../../components/Modal/Modal"
import { priority, Select, status } from "../../components/Select/Select"
import axios from '../../axios/axios';
import { DefaultI, ITask, IUser } from "../../interfaces/interface"
import Avatar from "../../components/Avatar/Avatar"

interface IMyTasks extends DefaultI {
    user: IUser;
}


export default function MyTasks({ user,setUser }: IMyTasks) {

    useEffect(() => {
        if(user.id !== 0){
            axios.get(`/task/all/${user.id}`)
            .then(result => {
                setTasks(result.data.tasks)
                console.log(result.data)
            })
        }
    }, [user.id !== 0])

    const [tasks, setTasks] = useState<ITask[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showModalEdit,setShowModalEdit] = useState<boolean>(false)
    const [showModalProject,setShowModalProject] = useState<boolean>(false)
    const [showModalProfile,setShowModalProfile] = useState<boolean>(false)
    const [selectEdit,setSelectedEdit] = useState<ITask>({id: 0,description: "",priority:"Baixa",status:"To Do",userId: user.id,createdAt:"",updatedAt:""})
    const [animation, setAnimation] = useState<string>('slide-in')
    const [taskIsDragging, setTaskIsDragging] = useState<number>(0)
    const [cardDown, setCardDown] = useState<any>()

    const [titleNewTask, setTitleNewTask] = useState<string>("")
    const [priorityNewTask, setPriorityNewTask] = useState<priority | status>("Baixa")
    const [statusNewTask, setStatusNewTask] = useState<status | priority>("To Do")

    const [projectName,setProjectName] = useState<string>("")

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

    const updateTask = (): void => {
        if (selectEdit) {
            axios.put(`/task`, {...selectEdit}).then(result => {
                console.log(result)
            })
        }
    }

    const onDelete = (id: number) => {
        axios.delete(`/task/${id}`).then(result => {
            console.log(result)
        })
    }

    const toggleModalEdit = (id: number) => {
        axios.get(`/task/${id}`).then(result => {
            setSelectedEdit(result.data.task)
            setShowModalEdit(true)
        }) 
    }

    const createProject = async () => {
        const result = await axios.post(`/project`,{name: projectName,owner: user.id});
        const json = await result.data;
        const Resultd = await axios.post(`/user-project`,{userId: user.id,projectId: result.data.project.id})
        const jsonD = await Resultd.data
    }

    return (
        <>
            <DesktopContainer title="My tasks" createProject={() => setShowModalProject(true)} user={user} setUser={setUser}>
                <BodyContainer>
                    <ToolContainer>
                        <SearchInput onChange={() => null} />
                        <ButtonSmallIcon onClick={() => setShowModal(true)}>Nova Tarefa</ButtonSmallIcon>
                    </ToolContainer>
                    <TasksContainer>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)} onDrop={(e: any) => onDropCard(e,"To Do",taskIsDragging)}>
                            <TitleColumn>To Do</TitleColumn>
                            <NewTask onClick={() => setShowModal(true)}><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} />Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <>
                                        {task.status === "To Do" && (
                                            <Task priority={task.priority} title={task.description} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} onDelete={() => onDelete(task.id)} onClick={() => toggleModalEdit(task.id)}/>
                                        )}
                                    </>
                                )
                            })}
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDrop={(e: any) => onDropCard(e,"Doing",taskIsDragging)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)}>
                            <TitleColumn>Doing</TitleColumn>
                            <NewTask onClick={() => setShowModal(true)}><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <>
                                        {task.status === "Doing" && (
                                            <Task priority={task.priority} title={task.description} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} onDelete={() => onDelete(task.id)} onClick={() => toggleModalEdit(task.id)}/>
                                        )}
                                    </>
                                )
                            })}
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)} onDrop={(e: any) => onDropCard(e,"Done",taskIsDragging)}>
                            <TitleColumn>Done</TitleColumn>
                            <NewTask onClick={() => setShowModal(true)}><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <>
                                        {task.status === "Done" && (
                                            <Task priority={task.priority} title={task.description} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} onDelete={() => onDelete(task.id)} onClick={() => toggleModalEdit(task.id)}/>
                                        )}
                                    </>
                                )
                            })}
                        </TaskColumn>
                        <TaskColumn onDragOver={(e: DragEvent<HTMLDivElement>) => onDragOver(e)} onDragLeave={(e: DragEvent<HTMLDivElement>) => onDragLeave(e)} onDrop={(e: any) => onDropCard(e,"Review",taskIsDragging)}>
                            <TitleColumn>Review</TitleColumn>
                            <NewTask onClick={() => setShowModal(true)}><PlusIcon width="20" height="20" color={Styles["Primary-500"].value} /> Nova Tafera</NewTask>
                            {tasks.map((task, index) => {
                                return (
                                    <>
                                        {task.status === "Review" && (
                                            <Task priority={task.priority} title={task.description} id={task.id} setCardDown={setCardDown} cardDown={cardDown} onDragStart={onDragStart} onDelete={() => onDelete(task.id)} onClick={() => toggleModalEdit(task.id)}/>
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
                        <Select options={["Baixa", "Média","Alta" ]} label="Prioridade" value={priorityNewTask} onChange={(value: priority | status) => setPriorityNewTask(value)} />
                        <Select options={["To Do", "Doing", "Done","Review" ]} label="Status" value={statusNewTask} onChange={(value: priority | status) => setStatusNewTask(value)} />
                        <PrimaryMediumButton onClick={() => createNewTask()}>Salvar</PrimaryMediumButton>
                    </div>
                </Modal>
            )}
            {showModalEdit && (
                <Modal animation={animation} setShow={setShowModalEdit}>
                    <div style={{ display: "grid", rowGap: "16px" }}>
                        <EditableInput onChange={(e) => setSelectedEdit({...selectEdit,description: e.target.value})} value={selectEdit?.description} placeholder="Sem Título" />
                        <Select options={["Baixa", "Média","Alta" ]} label="Prioridade" value={selectEdit.priority} onChange={(value: any) => setSelectedEdit({...selectEdit,priority: value})} />
                        <Select options={["To Do", "Doing", "Done","Review" ]} label="Status" value={selectEdit.status} onChange={(value: any) => setSelectedEdit({...selectEdit,status: value})} />
                        <PrimaryMediumButton onClick={() => updateTask()}>Salvar</PrimaryMediumButton>
                    </div>
                </Modal>
            )}
            {showModalProject && (
                 <Modal animation={animation} setShow={setShowModalProject}>
                 <div style={{ display: "grid", rowGap: "16px" }}>
                     <Input onChange={(e) => setProjectName(e.target.value)} label="Nome"/>
                     <PrimaryMediumButton onClick={() => createProject()}>Salvar</PrimaryMediumButton>
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

