import { useState } from "react"

export default function App(){
  const [email, setEmail] = useState("")
  const [coment, setComent] = useState("")
  const [coments, setComents] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    
    const newComment = {
      id: Math.floor(Math.random() * 10000000),
      author: email,
      content: coment,
      contentAt: new Date()
    }
    
    setComents((state) => [newComment, ...state])
    setEmail("")
    setComent("")
  }
  return (
    <div id="app">
      <h2>Secção de comentarios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input
        type="email"
        id="author"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        required/>
        <label htmlFor="content">Comentario</label>
        <textarea
        id="content"
        cols="30"
        rows="6"
        value={coment}
        onChange={(ev) => setComent(ev.target.value)}
        ></textarea>
        <button type="submit">Enviar comentario</button>
      </form>
      <section id="coments">
        <div>
          <h3>author@email.com</h3>
          <span>Em 14/02/25</span>
          <p>Comentario de exemplo...</p>
        </div>
        {coments.length > 0 ?
          coments.map((coment) => (
            <div key={coment.id}>
              <h3>{coment.author}</h3>
              <span>Em {coment.contentAt.toLocaleString()}</span>
              <p>{coment.content}</p>
            </div>
          )) : (
            <p>Seja o primeiro a comentar!</p>
          )}
      </section>
    </div>
  )
}