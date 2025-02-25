import Container from "./components/Container"
import Header from "./components/Header"
import UsandoContexto from "./Contexts/UserContext"

export default function App(){
  const user = {
    name: "Daniel",
    email: "daniel@email.com"
  }

  return(
    <>
      <UsandoContexto.Provider value={user}>
        <Header />
        <h1>Usando contexto</h1>
        <Container>
          <p>Este é o nosso app com contexto</p>
        </Container>
      </UsandoContexto.Provider>
    </>
  )
}