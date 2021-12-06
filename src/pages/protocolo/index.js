import React from "react";
import * as Styles from "./styles";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/button";

export default function Protocol() {
  return (
    <Styles.Container>
      <FaCheckCircle size="280" color="#3FBE88" />
      <Styles.Description>
        Sua denúncia foi enviada com sucesso, e pode ser consultada na guia de
        consultas exclusivamente pelo número de protocolo
      </Styles.Description>

      <Styles.Protocol>
        <Styles.IdProtocol>Protocolo N°00000001</Styles.IdProtocol>
      </Styles.Protocol>

      <Styles.Print>
        Anote-o ou tire um print desta tela
      </Styles.Print>

      <Button size={"50"} back={"#3FBE88"} color={"#FFFFFF"} name="Finalizar" />
    </Styles.Container>
  );
}
