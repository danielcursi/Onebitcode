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
                    <li><Button text="GitHub" links="https://github.com/danielcursi" /></li>
                    <li><Button text="Linkedin" links="https://www.linkedin.com/in/danielcursi/" /></li>
                    <li><Button text="Instagran" links="https://www.instagram.com/daniel_cursii/" /></li>
                </ul>
            </div>
        </div>
    )
}