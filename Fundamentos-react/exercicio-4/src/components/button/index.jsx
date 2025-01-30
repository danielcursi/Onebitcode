import styles from "./styles.module.css"

export default function button(props){
    return <button className={styles.wrapper} {...props}>{props.children}</button>
}