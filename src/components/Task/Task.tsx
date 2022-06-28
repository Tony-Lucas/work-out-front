import React, { useState } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"
import { BalonIcon, OptionsIcon } from "../../assets/icons/Icons";
import Avatar from "../Avatar/Avatar";
import TaskOptions from "../TaskOptions/TaskOptions";

interface TaskI{
    title?: string;
    foto?: string;
    usuario?: string;
    contagem?: number;
    style?: object,
    bindPos?: any,
    id: number
}

export default function Task(props: TaskI){

    const [showOption, setShowOption] = useState<boolean>(false)

    const showOptionHandle = () => {
        setShowOption(!showOption)
    }

    return(
        <Container style={{...props.style}} {...props.bindPos()} id={props.id}>
            <Title>
                {props.title}
                <Options onClick={()=> showOptionHandle()}>
                    <OptionsIcon/>
                    <TaskOptions visible={showOption}/>
                </Options>
            </Title>
            <Body>
                <Perfil>
                    <Avatar foto={props.foto}/>
                    <Nome>
                        {props.usuario}
                    </Nome>
                </Perfil>
                <ComentsNumber>
                    <BalonIcon/>
                    {props.contagem}
                </ComentsNumber>
                
            </Body>
            
        </Container>
    )
}

const Container = styled.div`
    background-color: ${Styles.White.value};
    border-radius: 5px;
    cursor:pointer;
    border: 1px solid ${Styles["Gray-100"].value};
    user-select: none;
`
const Title = styled.span`
    font-size: 0.75em;
    color: ${Styles.Black.value};
    font-family: Montserrat-Semibold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid ${Styles["Gray-100"].value};
`
const Options = styled.button`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
`
const Body = styled.div`
    padding: 12px;
`
const Perfil = styled.div`
    display: flex;
    align-items: center;
`

const Nome = styled.span`
    font-size: 0.625em;
    font-family: Montserrat-Regular;
    color: ${Styles.Black.value};
`
const ComentsNumber = styled.span`
    display: flex;
    align-items: center;
    margin-top: 4px;
    font-size: 0.625em;
    font-family: Montserrat-Regular;
    color: ${Styles["Gray-500"].value};
`
