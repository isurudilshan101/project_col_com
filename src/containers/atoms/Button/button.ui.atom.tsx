import React from "react";
import { iButtonContract } from "./button.contract.atom";

const ButtonUI: React.FC<iButtonContract> = ({ name, ...rest }) => {
  return <div>{name}</div>;
};

export default ButtonUI;
