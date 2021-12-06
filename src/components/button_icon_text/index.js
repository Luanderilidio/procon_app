import React from "react";
import * as Styles from "./styles"
import { BsCalendarCheck } from "react-icons/bs";

export default function ButtonIconText(props) {
  return (
    <Styles.Container>
      <props.img color="#FFFFFF" size="40" />
      <p>{props.name}</p>
    </Styles.Container>
  )
}