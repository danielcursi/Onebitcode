import { useState } from "react"
import moveis from "../components/database.json"
export default function Moveis(){
    const [hoverId, setHoverId] = useState(null)
    return(
        <section>
            <h2>Filmes</h2>
            <div style={{display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", marginTop: "4rem"}}>
                {moveis.map((movie) => (
                <div
                key={movie.id}
                onMouseEnter={() => setHoverId(movie.id)}
                onMouseLeave={() => setHoverId(null)}
                style={{
                    display: "flex", flexDirection: "column", alignItems: "center", width: "20rem", background: "#1a1919", borderRadius: "1rem", padding: "1rem 2rem", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.363)", transition: "transform 0.3s, opacity 0.3s", transform: hoverId === movie.id ? "scale(1.1)" : "scale(1)", opacity: hoverId && hoverId !== movie.id ? 0.7 : 1
                    }} >
                    <h2 style={{textAlign: "center", height: "6rem", display: "flex", alignItems: "center"}}>{movie.title}</h2>
                    <img src={movie.Link} alt="" style={{width: "100%", borderRadius: ".5rem", marginBottom: "1rem"}}/>
                    <p><span style={{fontWeight: "800"}}>Sinopse: </span>{movie.synopsis}</p>
                    <p style={{marginTop: "auto"}}>{movie.WhereToWatch}</p>
                </div>
            ))}
            </div>
            
        </section>
    )
}