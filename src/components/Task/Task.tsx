import React, { DragEvent, useState } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"
import { BalonIcon, OptionsIcon } from "../../assets/icons/Icons";
import Avatar from "../Avatar/Avatar";
import TaskOptions from "../TaskOptions/TaskOptions";
import 'react-loading-skeleton/dist/skeleton.css'

import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { ITask, priority } from "../../interfaces/interface";
export interface TaskI {
    title?: string;
    created?: string;
    priority: priority;
    foto?: string;
    usuario?: string;
    contagem?: number;
    style?: object,
    bindPos?: any,
    id: number,
    setCardDown: any,
    cardDown: any,
    onDragStart: (id: number) => void,
    onDelete: () => void,
    onClick: () => void
}

export default function Task(props: TaskI) {

    const [showOption, setShowOption] = useState<boolean>(false)

    const showOptionHandle = () => {
        setShowOption(!showOption)
    }

    function setColor(priority: priority){
        if(priority === 'Baixa'){
            return Styles["Primary-500"].value
        }else if(priority === 'Média'){
            return Styles["Secondary-500"].value
        }else{
            return Styles["Danger-500"].value
        }
    }

    return (
        <Container draggable="true" onDragStart={() => props.onDragStart(props.id)} id={`card-${props.id}`}>
            <Title>
                <Priority color={setColor(props.priority)}/>
                <span style={{padding: '12px'}} onClick={() => props.onClick()}>
                    {props.title}
                </span>
                <Options id="options" onClick={() => showOptionHandle()}>
                    <OptionsIcon />
                    <TaskOptions visible={showOption} onDelete={() => props.onDelete()}/>
                </Options>
            </Title>
            <Body onClick={()=> props.onClick()}>
                <Chip>
                    {props.created || '19 Jul'}
                </Chip>
                <Chip color="#E6F1FF">
                    Front-end
                </Chip>
            </Body>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    touch-action:pan-y;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid ${Styles["Gray-100"].value};
    user-select: none;
    &:hover{
        #options{
            opacity: 1;
            transition: 0.5s;
        }
    }
`


const Title = styled.span`
    font-size: 0.75em;
    color: ${Styles.Black.value};
    font-family: Montserrat-Semibold;
    display: grid;
    grid-template-columns: fit-content(100%) 1fr fit-content(100%);
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${Styles["Gray-100"].value};
`
const Options = styled.button`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    margin-right: 8px;
`
const Body = styled.div`
    padding: 12px;
    display: grid;
    grid-template-columns: fit-content(100%) fit-content(100%);
    gap: 4px;
`

const Priority = styled.div<{color: string}>`
    background-color: ${props => props.color ?? Styles["Primary-500"].value};
    height: 100%;
    width: 4px;
    border-top-left-radius: 4px; 
`

const Chip = styled.span<{color?: string}>`
    background-color: ${props => props.color ?? "#FFF2DC" } ;
    font-family: Montserrat-Regular;
    font-size: 0.5em;
    border-radius: 8px;
    color: ${Styles.Black};
    padding: 4px 12px;
`