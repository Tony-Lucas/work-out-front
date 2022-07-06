export interface IUser{
    id: number;
    name: string;
    email: string;
}
export interface ITask{
    id: number,
    description: string,
    priority: "Baixa" | "Média" | "Alta",
    status: "To Do" | "Doing" | "Done" | "Review",
    createdAt: string,
    updatedAt: string,
    userId: number
}