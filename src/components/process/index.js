import React from "react";
import * as Styles from "./styles";
import ButtonIconCircle from "../button_circle";

export default function Process(props) {

  return (
    <Styles.Container>
      <Styles.Process>
      <ButtonIconCircle
        back={"#3FBE884C"}   
        color={"#3793A2"}
        img={props.img}
      />
      <Styles.ContainerDescription>
        <Styles.Description>
          {props.description}
        </Styles.Description>
        <Styles.Description>
          {props.data}
        </Styles.Description>
        <Styles.Description>
          Atendente: {props.atendente}
        </Styles.Description>
        </Styles.ContainerDescription>
      </Styles.Process>
    </Styles.Container>
  )
};
