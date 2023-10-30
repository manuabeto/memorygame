import React, { useState } from "react";

function Images (props) {

  function TurnAroud () {

    setBack({img: require(`../imagenes/${props.image}.jpg`), flipped: true})

  }
  const [Back, setBack] = useState ({img:require("../imagenes/bgb.jpg"), flipped: false})

  return (
   <img 
   onClick={TurnAroud}
   src={(Back.img)} alt="Aloha"/>
  )
}
export default Images;