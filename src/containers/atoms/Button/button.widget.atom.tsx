import React from "react";
import { iButtonContract } from "./button.contract.atom";
import ButtonUI from "./button.ui.atom";

const ButtonWidget: React.FC = (_props) => {
  let schema: iButtonContract = {
    name: "NAME",
    onButtonPress: () => {},
  };
  //   or useState ekak through manage karanna

  return <ButtonUI {...schema} />;
};

// const ButtonWidget = (_props: any) => {
//   let schema: iButtonContract = {
//     name: "NAME",
//     onButtonPress: () => {},
//   };

//   //   or useState ekak through manage karanna

//   //   schema.name="Dulan";
//   //   return <ButtonUI {...schema} />;
//   return <p>lol</p>;
// };

export default ButtonWidget;
