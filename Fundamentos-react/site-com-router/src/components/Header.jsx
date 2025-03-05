import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header style={{borderBottom: "1px solid #cbc7d0", marginBottom: "2rem"}}>
            <nav style={{display: "flex", gap: "1rem", fontSize: "1.4rem"}}>
                <Link to="/">Inicio</Link>
                <Link to="/History">Historia</Link>
                <Link to="/Moveis">Filmes</Link>
            </nav>
        </header>
    )
}