import { Dispatch, SetStateAction } from "react";

export interface DefaultI{
    setUser: Dispatch<SetStateAction<any>>;
}

export interface IUser{
    id: number;
    name: string;
    email: string;
    imgUrl: string
}
export type priority = "Baixa" | "Média" | "Alta";

export interface ITask{
    id: number,
    description: string,
    priority: priority,
    status: "To Do" | "Doing" | "Done" | "Review",
    createdAt: string,
    updatedAt: string,
    userId: number
}

export interface IProject{
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner: number,
}

export interface IProjectTasks{
    id: number,
    description: string,
    priority: "Baixa" | "Média" | "Alta",
    status: "To Do" | "Doing" | "Done" | "Review",
    createdBy: number,
    lastUpdateBy: number,
    createdAt: string,
    updatedAt: string,
    projectId: number
}

export interface IUserProjects{
    id: number,
    userId: number,
    projectId: number,
    createdAt: string,
    updatedAt: string,
}