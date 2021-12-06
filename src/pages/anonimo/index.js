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

export default function Anonymous() {
  return (
    <Styles.Container>
      <Header title={"Denúncia"} />
        <Styles.Main>
          <Styles.Description>Identificação da Denúncia</Styles.Description>

          <Input name={"Insira o nome do estabelecimento"} />
          <TextArea name={"Faça uma descrição da sua denúncia"} />

          <Styles.Uploads>
            <Styles.Description2>
              Insira até 3 fotos que evidenciem a sua denúncia:
            </Styles.Description2>

            <Styles.Images>
              <ButtonIcon
                view={"none"}
                back={"#3FBE884C"}
                color={"#3793A2"}
                img={FiImage}
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
