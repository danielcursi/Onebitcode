import { useContext } from "react"
import UsandoContexto from "../Contexts/UserContext"

export default function Header(){
    const user = useContext(UsandoContexto)
    return (
        <header>
            <h3>Bem vindo, {user.name}.</h3>
        </header>
    )
}