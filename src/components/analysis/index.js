import React from "react";
import * as Styles from "./styles";
import ButtonIconCircle from "../button_circle";

export default function Analysis(props) {

  return (
    <Styles.Container>
      <ButtonIconCircle
        back={"#FFFFFF"}  
        color={"#3793A2"}
        img={props.img}
      />
    </Styles.Container>
  )
};
