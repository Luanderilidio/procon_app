import React from "react";
import Header from "../../components/header";
import * as Styles from "./styles";
import Footer from "../../components/footer";
import logoCaceres from "../../assets/logo_caceres.svg";
import ModalDenuncia from "../../components/modal_denuncia";
import ModalConsulta from "../../components/modal_consulta";
import ModalAgendamento from "../../components/modal_agendamento";

export default function ModalPage() {
  return (
    <Styles.Container>
      <Header title={"Denúncia"} />
        <Styles.Main>
          <ModalAgendamento/>
        </Styles.Main>
      <Footer logo={logoCaceres} />
    </Styles.Container>
  );
}
