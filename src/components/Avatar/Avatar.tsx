import React, { DragEvent, MouseEvent } from "react"
import Styles from "../../styles.json"
import styled from "styled-components"

interface IAvatar{
    url?: string;
    width?: string,
    height?: string
}

export default function Avatar(props: IAvatar){
    return(
        <Foto src={props.url || "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"} width={props.width || "24"} height={props.height || "24"}/>
    )
}

const Foto = styled.img`
    border-radius: 500px;
    margin-right: 4px;
`