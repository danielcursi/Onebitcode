import styles from "./styles.module.css"
import Title from "../Title/index.jsx"
import ProfileSection from "./ProfileSection/index.jsx"
import LinkButton from "../LinkButton/indeex.jsx"
import { useState } from "react"



export default function Profile(props) {

  const [followText, setFollowText] = useState("Follow")

  function handleClick(ev){
    alert("Você começou a seguir!")
    setFollowText("Following")
  }

  return (
    
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        {props.name}
        <button
          className={styles.button}
              onClick={handleClick}
              >
                {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
      >
        <LinkButton href={props.githubUrl}>GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl}>LinkedIn</LinkButton>
        <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
      
    </div>
  )
}