import React from "react";
import Header from "../../components/header";
import * as Styles from "./styles";
import Footer from "../../components/footer";
import logoCaceres from "../../assets/logo_caceres.svg";
import { BiTimeFive } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheck2Square } from "react-icons/bs";
import { VscFoldDown } from "react-icons/vsc";

import ButtonIconCircle from "../../components/button_circle";
import Process from "../../components/process";
import Analysis from "../../components/analysis";

export default function Query() {
  return (
    <Styles.Container>
      <Header title={"Reclamações"} />
      <Styles.Main>
        <Styles.Section>
          <ButtonIconCircle
            back={"#3FBE884C"}
            color={"#3793A2"}
            img={BiTimeFive}
            name={"Aguardando análise"}
          />
          <ButtonIconCircle
            back={"#3FBE884C"}
            color={"#3793A2"}
            img={BsPencilSquare}
            name={"Em análise"}
          />
          <ButtonIconCircle
            back={"#3FBE884C"}
            color={"#3793A2"}
            img={BsCheck2Square}
            name={"Aguardando análise"}
          />
        </Styles.Section>
        <Styles.Section>
          <Styles.Text>
            Aguardando <br /> análise
          </Styles.Text>
          <Styles.Text>Em análise</Styles.Text>
          <Styles.Text>
            Processo <br /> concluído
          </Styles.Text>
        </Styles.Section>
        <Styles.ContainerLine>
          <Styles.Line />
        </Styles.ContainerLine>

        <Process
          back={"#3FBE884C"}
          img={BiTimeFive}
          description={"Processo recebido pelo sistema"}
          data={"03/11/2021 08:30"}
          atendente={"Luander"}
        />
        <Analysis img={VscFoldDown} />

        <Process
          back={"#3FBE884C"}
          img={BsPencilSquare}
          description={"Análise Iniciada"}
          data={"03/11/2021 08:30"}
          atendente={"Luander"}
        />

        <Analysis img={VscFoldDown} />

        <Process
          back={"#3FBE884C"}
          img={BsCheck2Square}
          description={"Processo concluído"}
          data={"03/11/2021 08:30"}
          atendente={"Luander"}
        />

        {/* <Styles.Process>
            <ButtonIconCircle
                back={"#3FBE884C"}  
                color={"#3793A2"}
                img={BiTimeFive}
                name={"Aguardando análise"}
              />
            
            <Styles.ContainerDescription>
              <Styles.Description>
                Processo recebido pelo sistema
              </Styles.Description>
              <Styles.Description>
                03/11/2021 18:16
              </Styles.Description>
            </Styles.ContainerDescription>
          </Styles.Process> */}
      </Styles.Main>

      <Footer logo={logoCaceres} />
    </Styles.Container>
  );
}
