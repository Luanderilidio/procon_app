import React from "react";
import * as Styles from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

export default function Header(props) {
  return (
    <Styles.Container>
      <Styles.Button>
        <AiOutlineMenu />
      </Styles.Button>
      <Styles.Title>{props.title}</Styles.Title>
      <Styles.Button>
        <BiArrowBack />
      </Styles.Button>
    </Styles.Container>
  );
}
