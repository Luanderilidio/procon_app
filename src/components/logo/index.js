import React from "react";
import * as Styles from "./styles";

export default function Logo(props) {
  return (
      <Styles.Container>
        <Styles.Logo  src={props.logo} />
      </Styles.Container>
  ) 
}