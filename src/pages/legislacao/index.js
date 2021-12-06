import React from "react";
import Header from "../../components/header";
import * as Styles from "./styles";
import Footer from "../../components/footer";
import logoCaceres from "../../assets/logo_caceres.svg";
import Button from "../../components/button";
import Paragrafo from "../../components/paragrafo";

export default function Legislation() {
  return (
    <Styles.Container>
      <Header title={"Legislação"} />
      <Styles.Main>
        <Styles.Selection>
          <Button back={"#3FBE88"} size={"30"} color={"#FFFFFF"} name={"Municipal"} />
          <Button back={"#3FBE88"} size={"30"} color={"#FFFFFF"} name={"Estadual"} />
          <Button back={"#3FBE88"} size={"30"} color={"#FFFFFF"} name={"Federal"} />
        </Styles.Selection>

          <Styles.Lista>
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />
            <Paragrafo
              title={"luander ilidio de arruda"}
              text={
                " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
              }
            />

          </Styles.Lista>
      </Styles.Main>

      <Footer logo={logoCaceres} />
    </Styles.Container>
  );
}
