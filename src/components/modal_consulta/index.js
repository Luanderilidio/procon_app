import React from "react";
import * as Styles from "./styles";
import Button from "../button";
import Input from "../input";

export default function ModalConsulta(props) {
  return (
    <Styles.Container>
      <Styles.Main>
        <Styles.Description>
          Insira o número de protocolo da denúncia para acompanhar o seu
          processo
        </Styles.Description>
        <Input name={"N° de protocolo ou seu CPF"} />
        <Styles.Selection>
          <Button size={"50"}back={"#3FBE88"} color={"#FFFFFF"} name={"Pesquisar"} />
        </Styles.Selection>
      </Styles.Main>
    </Styles.Container>
  );
}
