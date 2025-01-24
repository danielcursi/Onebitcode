import style from "../profile/style.module.css"
import Button from "../button/button"

export default function Profile(props){
    return(
        <div className={style.containerCard}>
            <div className={style.perfilTop}>
                <img src={props.Perfil} className={style.img} alt="Perfil" />
                <h2>{props.Name}</h2>
            </div>
            <div className={style.description}>
                <p>Desenvolvedor web Frontend</p>
                <p>+55 8899999-999</p>
                <p>danielcursixdy@gmail.com</p>
            </div>
            <div className={style.Buttons}>
                <ul>
                    <li><Button text="GitHub" links="https://google.com"/></li>
                    <li><Button text="Linkedin"/></li>
                    <li><Button text="Instagran"/></li>
                </ul>
            </div>
        </div>
    )
}