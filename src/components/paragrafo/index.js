import React from "react";
import * as Styles from "./styles";

export default function Paragrafo(props) {
  return (
    <Styles.Container>
      - <span>{props.title}</span> - {props.text}
    </Styles.Container>
  );
}
