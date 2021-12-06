import React from "react";
import * as Styles from "./styles";
import Button from "../button";
import Input from "../input";
import TextArea from "../textarea";

export default function ModalAgendamento(props) {
  return (
    <Styles.Container>
      <Styles.Main>
        <Styles.Description>
          Insira os seus dados para completar o agendamento
        </Styles.Description>
        <Input name={"N° de protocolo ou seu CPF"} />
        <Input name={"Número de telefone"} />
        <Input name={"E-mail"} />
        <Input name={"RG ou CPF"} />
        <TextArea name={"Faça uma descrição do seu atendimento"} />
        <Styles.Selection>
          <Button size={"50"} back={"#3FBE88"} color={"#FFFFFF"} name={"Pesquisar"} />
        </Styles.Selection>
      </Styles.Main>
    </Styles.Container>
  );
}
