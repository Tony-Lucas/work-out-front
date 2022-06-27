import React, { DragEvent, MouseEvent } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"

interface IAvatar{
    foto?: string;
}

export default function Avatar(props: IAvatar){
    return(
        <Foto src={props.foto}/>
    )
}

const Foto = styled.img`
    width: 20px;
    border-radius: 10px;
    margin-right: 4px;
`