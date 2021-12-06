import React from "react";
import Header from "../../components/header";
import * as Styles from "./styles";
import Footer from "../../components/footer";
import logoCaceres from "../../assets/logo_caceres.svg";
import Status from "../../components/table";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const WEEKDAYS_LONG = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];
const WEEKDAYS_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export default function Scheduling() {
  return (
    <Styles.Container>
      <Header title={"Agendamento"} />
      <Styles.Main>
        <Styles.Calendar>
          <DayPicker
            fixedWeeks
            locale="pt"
            months={MONTHS}
            weekdaysLong={WEEKDAYS_LONG}
            weekdaysShort={WEEKDAYS_SHORT}
            firstDayOfWeek={0}
          />
        </Styles.Calendar>

        <Styles.Text>
          Selecione um horário disponível para prosseguir com o agendamento:
        </Styles.Text>

        <Styles.HeaderTable>
          <Styles.Title>Horário</Styles.Title>
          <Styles.Title>Solicitante</Styles.Title>
          <Styles.Title>Disponível</Styles.Title>
          <Styles.Title>Agendar</Styles.Title>
        </Styles.HeaderTable>
        <Styles.GridTable>
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#26C546"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#E80303"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#26C546"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#E80303"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#26C546"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#E80303"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#26C546"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#E80303"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#26C546"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#E80303"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#26C546"}
          />
          <Status
            hora={"09:30-10:30"}
            solicitante={"Luander"}
            color={"#E80303"}
          />
        </Styles.GridTable>
      </Styles.Main>

      <Footer logo={logoCaceres} />
    </Styles.Container>
  );
}
