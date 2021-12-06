import React from "react";
import * as Styles from "./styles";

export default function Button(props) {
  return (
    <Styles.Container>
      <Styles.Main  back={props.back} size={props.size} >
        <Styles.Text color={props.color}>{props.name}</Styles.Text>
      </Styles.Main>
    </Styles.Container>
  )
};