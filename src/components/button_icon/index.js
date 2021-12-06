import React from "react";
import * as Styles from "./styles";

export default function ButtonIcon(props) {

  return (
    <Styles.Container back={props.back}>
      <Styles.Button>
        <props.img color={props.color}/>
      </Styles.Button>
    </Styles.Container>
  )
};