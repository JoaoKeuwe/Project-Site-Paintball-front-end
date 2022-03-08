import React, { useContext } from "react";
import { GiTec9, GiAk47, GiPistolGun, GiSteyrAug } from "react-icons/gi";
import { RiForbidLine } from "react-icons/ri";
import FormContext from "../context/FormContext";

function SecondaryWeapon() {
  const { form } = useContext(FormContext);

  let secondary;
  switch (form.secWeapon) {
    case "smg":
      secondary = <GiTec9 />;
      break;
    case "assault rifle":
      secondary = <GiAk47 />;
      break;
    case "pistol":
      secondary = <GiPistolGun />;
      break;
    case "sniper rifle":
      secondary = <GiSteyrAug />;
      break;
    default:
      secondary = <RiForbidLine />;
  }
  return secondary;
}

export default SecondaryWeapon;
