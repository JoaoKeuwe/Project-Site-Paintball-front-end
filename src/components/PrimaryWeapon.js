import React, { useContext } from "react";
import { GiTec9, GiAk47, GiPistolGun, GiSteyrAug } from "react-icons/gi";
import { RiForbidLine } from "react-icons/ri";
import FormContext from "../context/FormContext";

function PrimaryWeapon() {
  const { form } = useContext(FormContext);

  let primary;
  switch (form.priWeapon) {
    case "smg":
      primary = <GiTec9 />;
      break;
    case "assault rifle":
      primary = <GiAk47 />;
      break;
    case "pistol":
      primary = <GiPistolGun />;
      break;
    case "sniper rifle":
      primary = <GiSteyrAug />;
      break;
    default:
      primary = <RiForbidLine/>;
  }
  return primary;
}

export default PrimaryWeapon;
