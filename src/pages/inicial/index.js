  import React from "react";
  import Header from "../../components/header";
  import * as Styles from "./styles";
  import Logo from "../../components/logo";
  import logoCaceres from "../../assets/logo_caceres.svg";
  import logoProcon from "../../assets/logo_procon.png";
  import Footer from "../../components/footer";
  import ButtonIconText from "../../components/button_icon_text";
  import { BsCalendarCheck } from "react-icons/bs";
  import { HiPencilAlt } from "react-icons/hi";
  import { GoSearch } from "react-icons/go";
  import { BiDislike } from "react-icons/bi";
  import { MdOutlineStickyNote2 } from "react-icons/md";

  export default function Inicial() {
    return (
      <Styles.Container>
        <Header title={"App  PROCON-Cáceres"} />

        <Logo logo={logoProcon} />
        <Logo logo={logoCaceres} />

        <Styles.Main>
          <Styles.Welcome>
            <Styles.Title>Seja bem vindo ao App do PROCON-Cáceres</Styles.Title>
            <Styles.Description>
              Por este App é possível realizar denúncias, agendamentos de
              atendimentos e consultas.
            </Styles.Description>
          </Styles.Welcome>
          <Styles.Message>Selecione o seu serviço</Styles.Message>
          <Styles.Services>
            <ButtonIconText img={HiPencilAlt} name={"Denúncias"} />
            <ButtonIconText img={BsCalendarCheck} name={"Agendamento"} />
            <ButtonIconText img={GoSearch} name={"Consultas"} />
            <ButtonIconText img={BiDislike} name={"Reclamações"} />
            <ButtonIconText img={MdOutlineStickyNote2} name={"Legislações"} />
          </Styles.Services>
        </Styles.Main>
        <Footer />
      </Styles.Container>
    );
  }
