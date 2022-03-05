import React, { useContext } from "react";
import { GiTec9, GiAk47, GiPistolGun, GiSteyrAug } from "react-icons/gi";
import FormContext from "../context/FormContext";

function SecondaryWeapon() {
  const { form } = useContext(FormContext);

  let secondary;
  switch (form.secWeapon) {
    case "smg":
      secondary = <GiTec9 />;
      break;
    case "assaultRifle":
      secondary = <GiAk47 />;
      break;
    case "pistol":
      secondary = <GiPistolGun />;
      break;
    case "sniperRifle":
      secondary = <GiSteyrAug />;
      break;
    default:
      secondary = <div>Arma não encontrada</div>;
  }
  return secondary;
}

export default SecondaryWeapon;
