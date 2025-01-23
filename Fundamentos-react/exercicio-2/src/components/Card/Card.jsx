import Style from "./Style.module.css"

import Button from "../button"

export default function Card(props){
    return (
        <div className={Style.mainContent}>
            
            <img className={Style.poster} src={props.posterImg} alt={props.title} />
            
            <div className={Style.contentPoster}>
                <h1>{props.title}</h1>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. </p>
                <Button />
            </div>

        </div>
    )
}