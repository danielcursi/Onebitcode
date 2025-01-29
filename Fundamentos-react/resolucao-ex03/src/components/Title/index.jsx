import Style from "./style.module.css"

export default function Title(props){
    return(
        <h2 className={Style.wrapper}>
            {props.children}
        </h2>
    )
}