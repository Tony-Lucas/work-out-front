import React, { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Login"
import axios from "../axios/axios"
import MyTasks from "./dashboard/MyTasks"
import SidebarMenu from "../components/SidebarMenu/SidebarMenu"

export default function RoutesPage() {

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("/auth").then(result => {
            if (result.data.success) {
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
                <Route path="/dashboard/mytasks" element={<MyTasks />} />
            </Routes>
        </>
    )
}