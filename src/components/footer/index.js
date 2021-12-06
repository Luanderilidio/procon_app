import React from "react";
import * as Styles from "./styles";
import logoCaceres from "../../assets/logo_caceres.svg";

export default function Footer() {
  return (
    <Styles.Container>
      <Styles.Logo src={logoCaceres}/>
    </Styles.Container>
  );
}
