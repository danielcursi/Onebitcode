import { useContext } from "react"
import UseContext from "../Context/useContext"

const UseInfo = () => {
    const user = useContext(UseContext)

    return(
        <div>
            <h2>Informações do usuário</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default UseInfo