import moveis from "../components/database.json"
export default function Moveis(){
    return(
        <section>
            <h2>Filmes</h2>
            <div style={{display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", marginTop: "4rem"}}>
                {moveis.map((movie) => (
                <div key={movie.id} style={{display: "flex", flexDirection: "column", alignItems: "center", width: "20rem", background: "#1a1919", borderRadius: "1rem", padding: "1rem 2rem"}}>
                    <h2 style={{textAlign: "center"}}>{movie.title}</h2>
                    <img src={movie.Link} alt="" style={{width: "12rem"}}/>
                    <p><span style={{fontWeight: "800"}}>Sinopse: </span>{movie.synopsis}</p>
                    <p style={{marginTop: "auto"}}>{movie.WhereToWatch}</p>
                </div>
            ))}
            </div>
            
        </section>
    )
}