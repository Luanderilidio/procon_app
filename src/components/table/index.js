import React from "react";
import * as Styles from "./styles";
import { BsCheck2Circle } from "react-icons/bs";
import {FaRegCalendarPlus} from 'react-icons/fa'

export default function Status(props) {
  return (
    <Styles.Container>
      <Styles.Status>{props.hora}</Styles.Status>
      <Styles.Status>{props.solicitante}</Styles.Status>
      <Styles.Status>
        <BsCheck2Circle size="25" color={props.color}/>
      </Styles.Status>
      <Styles.Status>
        <FaRegCalendarPlus size="25" color={props.color}/>
      </Styles.Status>
    </Styles.Container>
  );
}
