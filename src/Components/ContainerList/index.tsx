import { ReactFragment } from "react";
import { ContainerListStyled } from "./styles";

const ContainerList = (props: { children: ReactFragment }) => {
  return <ContainerListStyled>{props.children}</ContainerListStyled>;
};

export default ContainerList;
