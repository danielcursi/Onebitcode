import style from "../button/style.module.css"

export default function Button(props){
    return <a className={style.estilo} href={props.links} target="_blank">{props.text} </a>
}