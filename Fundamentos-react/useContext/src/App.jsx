<<<<<<< HEAD
import Header from "./components/Header"
import Paragrafo from "./components/Paragrafo"
import UseInfo from "./components/UseInfo"
import UseContext from "./Context/useContext"

export default function App(){
  const user = {
    name: 'Daniel',
    email: 'daniel@gmail.com'
=======
import Container from "./components/Container"
import Header from "./components/Header"
import UsandoContexto from "./Contexts/UserContext"

export default function App(){
  const user = {
    name: "Daniel",
    email: "daniel@email.com"
>>>>>>> d30f828325db4e3b0ee9940f73792277b6f200fa
  }

  return(
    <>
<<<<<<< HEAD
    <UseContext.Provider value={user}>
      <Header />
      <h1>Usando o useContext</h1>
      <UseInfo />
      <Paragrafo paragraph="Esse é um parágrafo"/>
    </UseContext.Provider>
=======
      <UsandoContexto.Provider value={user}>
        <Header />
        <h1>Usando contexto</h1>
        <Container>
          <p>Este é o nosso app com contexto</p>
        </Container>
      </UsandoContexto.Provider>
>>>>>>> d30f828325db4e3b0ee9940f73792277b6f200fa
    </>
  )
}