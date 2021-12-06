import React from "react";
import * as Styles from "./styles";

export default function TextArea(props) {

  return (
    <Styles.Container>
      <Styles.Textarea placeholder={props.name} type="text"></Styles.Textarea>
    </Styles.Container>
  )
};
