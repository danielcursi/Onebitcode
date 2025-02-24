import Header from "./components/Header"
import Paragrafo from "./components/Paragrafo"
import UseInfo from "./components/UseInfo"
import UseContext from "./Context/useContext"

export default function App(){
  const user = {
    name: 'Daniel',
    email: 'daniel@gmail.com'
  }

  return(
    <>
    <UseContext.Provider value={user}>
      <Header />
      <h1>Usando o useContext</h1>
      <UseInfo />
      <Paragrafo paragraph="Esse é um parágrafo"/>
    </UseContext.Provider>
    </>
  )
}