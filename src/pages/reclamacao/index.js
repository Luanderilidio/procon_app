import React from "react";
import Header from "../../components/header";
import * as Styles from "./styles";
import Footer from "../../components/footer";
import logoCaceres from "../../assets/logo_caceres.svg";
import Input from "../../components/input";
import TextArea from "../../components/textarea";
import ButtonIcon from "../../components/button_icon";
import Button from "../../components/button";
import { FiImage } from "react-icons/fi";

export default function Complaint() {
  return (
    <Styles.Container>
      <Header title={"Reclamações"} />
      <Styles.Main>
        <Styles.Description>Identificação do Reclamante</Styles.Description>

        <Input name={"Nome"} />
        <Input name={"Número de telefone"} />
        <Input name={"Email"} />
        <Input name={"CPF ou RG"} />

        <Styles.Description>Identificação da Reclamações</Styles.Description>

        <Input name={"Insira o nome do estabelecimento"} />
        <TextArea name={"Faça uma descrição da sua reclamações"} />

        <Styles.Uploads>
          <Styles.Description>
            Insira até 3 fotos que evidenciem a sua reclamações:
          </Styles.Description>

          <Styles.Images>
            <ButtonIcon
              view={"none"}
              back={"#3FBE884C"}
              color={"#3793A2"}
              img={FiImage}
              name={""}
            />
            <ButtonIcon
              view={"none"}
              back={"#3FBE884C"}
              color={"#3793A2"}
              img={FiImage}
              name={""}
            />
            <ButtonIcon
              view={"none"}
              back={"#3FBE884C"}
              color={"#3793A2"}
              img={FiImage}
              name={""}
            />
          </Styles.Images>
        </Styles.Uploads>

        <Button size={"50"} back={"#3FBE88"} color={"#FFFFFF"} name={"Finalizar"} />
      </Styles.Main>

      <Footer logo={logoCaceres} />
    </Styles.Container>
  );
}
