import React, { DragEvent, MouseEvent } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"
import { BalonIcon, OptionsIcon } from "../../assets/icons/Icons";
import Avatar from "../Avatar/Avatar";

interface ITask{
    title?: string;
    foto?: string;
    usuario?: string;
    contagem?: number;
}

export default function Task(props: ITask){
    return(
        <Container >
            <Title>
                {props.title}
                <Options>
                    <OptionsIcon/>
                </Options>
            </Title>
            <Body>
                <Perfil>
                    <Avatar foto={props.foto}/>
                    <Nome>
                        {props.usuario}
                    </Nome>
                </Perfil>
                <Contagem>
                    <BalonIcon/>
                    {props.contagem}
                </Contagem>
                
            </Body>

        </Container>
    )
}

const Container = styled.div`
    background-color: ${Styles.White.value};
    border-radius: 5px;
    cursor:pointer;
`
const Title = styled.span`
    font-size: 0.75em;
    color: ${Styles.Black.value};
    font-family: Montserrat-Semibold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
`
const Options = styled.button`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
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
const Contagem = styled.span`
    display: flex;
    align-items: center;
    margin-top: 4px;
    font-size: 0.625em;
    font-family: Montserrat-Regular;
    color: ${Styles["Gray-500"].value};
`
