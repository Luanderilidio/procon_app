import React from "react";
import * as Styles from "./styles";

export default function Input(props) {

  return (
    <Styles.Container>
      <Styles.Input placeholder={props.name} type="text"></Styles.Input>
    </Styles.Container>
  )
};
