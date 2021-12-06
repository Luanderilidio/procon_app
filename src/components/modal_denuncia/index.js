import React from "react";
import * as Styles from "./styles";
import Button from "../button";

export default function ModalDenuncia(props) {

  return (
    <Styles.Container>
      <Styles.Main>
        <Styles.Description>Você deseja realizar uma denúncia anônima ou identificada?</Styles.Description>
        <Styles.Selection>
          <Button size={"50"} back={"#3FBE88"} color={"#FFFFFF"} name={"Anônima"} />
          <Button size={"50"} back={"#3FBE88"} color={"#FFFFFF"} name={"Identificada"} />
        </Styles.Selection>
      </Styles.Main>
    </Styles.Container>
  )
};
