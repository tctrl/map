import * as React from "react"
import * as style from "./card.module.scss"

const Card = ({ uri, title, ids, time }, key) => {

  const image = {}
  const imageUrl = ids[0]
  image.backgroundImage = `url(${imageUrl}.jpg)`

  return <a href={uri} key={key} className={style.card}>
    <div className={style.backgroundImage} style={image}>
      <h3>{title}</h3>
    </div>
  </a>
}

export default Card
