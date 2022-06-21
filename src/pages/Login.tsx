import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { PrimaryMediumButton, RegisterButton } from '../components/Buttons/Buttons';
import { Input } from '../components/Inputs/Inputs';
import Styles from "../styles.json"
import axios from "../axios/axios"
import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function Login() {

    // estados do login
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [page, setPage] = useState<string>("login")
    const [loading, setLoading] = useState<boolean>(false)

    // estados do cadastro
    const [nameRegister, setNameRegister] = useState<string>("")
    const [emailRegister, setEmailRegister] = useState<string>("")
    const [passwordRegister, setPasswordRegister] = useState<string>("")
    const [passwordVerifyRegister, setPasswordVerifyRegister] = useState<string>("")
    const [loadingRegister, setLoadingRegister] = useState<boolean>(false)

    const navigate: NavigateFunction = useNavigate()

    const auth = (): void => {
        setLoading(true)
        axios.post("/auth", { email: email, password: password }).then(result => {
            if (result.data.success) {
                setLoading(false)
                navigate("/dashboard/mytasks")
            } else {
                setLoading(false)
            }
        })
    }

    const register = (): void => {
        setLoadingRegister(true)
        if (nameRegister && emailRegister && passwordRegister && passwordVerifyRegister && passwordRegister === passwordVerifyRegister) {
            axios.post("/user/register", { email: emailRegister, password: passwordRegister, name: nameRegister }).then(result => {
                setLoadingRegister(false)
            })
        } else {
            setLoadingRegister(false)
        }
    }

    const changePage = (): void => {
        if (page === "login") {
            setPage("register")
        } else {
            setPage("login")
        }
    }

    return (
        <Container>
            <Illustration />

            <FormContainer>
                <Logo>LOGO</Logo>
                {page === "login" ?
                    <Form>
                        <Title>Bem vindo de volta,</Title>
                        <Subtitle>Faça o login</Subtitle>
                        <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
                        <Input label="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <PrimaryMediumButton onClick={auth} loading={loading}>Entrar</PrimaryMediumButton>
                        <Or>Ou</Or>
                        <RegisterButton onClick={changePage}>Cadastre-se</RegisterButton>
                    </Form>
                    :
                    <Form>
                        <Title>Cadastro</Title>
                        <Input label="Nome" onChange={(e) => setNameRegister(e.target.value)} />
                        <Input label="Email" onChange={(e) => setEmailRegister(e.target.value)} />
                        <Input label="Senha" type="password" onChange={(e) => setPasswordRegister(e.target.value)} />
                        <Input label="Confirmar senha" type="password" onChange={(e) => setPasswordVerifyRegister(e.target.value)} />
                        <PrimaryMediumButton onClick={register} loading={loadingRegister}>Salvar</PrimaryMediumButton>
                        <AlreadyHaveAccount>Ja possui uma conta ? <span onClick={() => changePage()}>Entrar</span></AlreadyHaveAccount>
                    </Form>
                }
            </FormContainer>
        </Container>
    )
}

const Container = styled.div`
    display:grid;
    height: 100vh;

    @media only screen and (min-width: 1024px){
        grid-template-columns: 1fr fit-content(100%);
    }
`

const FormContainer = styled.div`
    display:grid;
    background-color: white;
    padding: 30px 40px;
    position: relative;
    align-items:center;
`

const Illustration = styled.div`
    background-color: ${Styles['Gray-0'].value};

    @media only screen and (max-width: 1024px){
        display: none;
    }
`

const Logo = styled.span`
    font-family: Montserrat-Bold;
    font-size: 1.5em;
    position: absolute;
    top: 40px;
    left: 30px;
`

const Form = styled.div`
    display:grid;
    row-gap: 16px;
    
    @media only screen and (min-width: 1400px){
        width: 20vw;
        box-sizing: border-box;
        padding: 0px 40px;
    }
`

const Title = styled.span`
    font-family: Montserrat-Bold;
    font-size: 1.5em;
`

const Subtitle = styled.span`
    font-family: Montserrat-Medium;
    font-size: 1.25em;
`

const Or = styled.span`
    font-family: Montserrat-Medium;
    font-size: 1em;
    color: ${Styles['Gray-500'].value};
    text-align: center;
`

const AlreadyHaveAccount = styled.span`
    font-family: Montserrat-Medium;
    font-size: 1.25em;
    color: #333333;
    font-size: 0.875em;
    text-align:center;

    span{
        color: ${Styles['Primary-500'].value};
        cursor:pointer;
    }
`
