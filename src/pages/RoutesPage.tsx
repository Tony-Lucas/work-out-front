import React, { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Login"
import axios from "../axios/axios"
import MyTasks from "./dashboard/MyTasks"
import SidebarMenu from "../components/SidebarMenu/SidebarMenu"
import { IUser } from "../interfaces/interface"
import ProjectPage from "./dashboard/ProjectPage"

export default function RoutesPage() {

    const [user, setUser] = useState<IUser>({id: 0, name: '', email: '',imgUrl:""});

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("/auth").then(result => {
            if (result.data.success) {
                setUser(result.data.decoded.user)
                if (window.location.pathname === "/") {
                    window.location.href = window.location.href + "dashboard/mytasks"
                } else {

                }
            } else {
                console.log("Não tem token")
                navigate("/")
            }
        })
    }, [window.location.pathname])

    return (
        <>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard/mytasks" element={<MyTasks user={user}/>} />
                <Route path="/dashboard/:projectName" element={<ProjectPage user={user}/>} />
            </Routes>
        </>
    )
}