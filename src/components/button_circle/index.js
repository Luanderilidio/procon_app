import React from "react";
import * as Styles from "./styles";

export default function ButtonIconCircle(props) {

  return (
    <Styles.Container back={props.back}>
      <Styles.Button>
        <props.img size={"40"} color={props.color}/>
      </Styles.Button>
    </Styles.Container>
  )
};