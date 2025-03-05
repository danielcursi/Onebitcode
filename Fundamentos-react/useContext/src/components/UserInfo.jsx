import { useContext } from "react"
import UsandoContexto from "../Contexts/UserContext"

export default function UserInfo(){
    const user = useContext(UsandoContexto)
    return(
        <div>
            <h2>Informações do Usúario:</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}