import { Fragment } from "react";
import Card from "./components/Card/Card";
import swPosterImg from "./assets/img-poster.jpg"
import pesbPosterImg from "./assets/esb-poster.webp"
import rotjPosterImg from "./assets/rotj-poster.webp"

export default function App() {
  return (
    // Fragment usado para ter mais de um componente em precisar usar uma div pai
    // pode ser abreviado com <></>
    <Fragment>
     <h1>Exercício 2</h1>
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" posterImg={pesbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg} />
    </Fragment>
  )
}