import StatusText from "./StatusText"
import SubTitle from "./SubTitle"
import Title from "./Title"
import Style from "./App.module.css"

export default function App(){
  
  return (
    <div className={Style.app}>
    <Title />
    <SubTitle />
    <StatusText />
    </div>
  )
  
}