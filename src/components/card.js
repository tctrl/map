import * as React from "react";

const Card = ({ uri, title }, key) => {
  return <a href={uri} key={key}>
    {title}
  </a>
}

export default Card;
