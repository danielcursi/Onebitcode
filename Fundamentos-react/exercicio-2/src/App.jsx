import { Fragment } from "react";
import Card from "./Card";

export default function App() {
  return (
    // Fragment usado para ter mais de um componente em precisar usar uma div pai
    // pode ser abreviado com <></>
    <Fragment>
      <h1>Teste</h1>
      <Card />
    </Fragment>
  )
}