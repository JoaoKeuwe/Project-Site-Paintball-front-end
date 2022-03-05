import React, { useContext } from "react";
import { GiTec9, GiAk47, GiPistolGun, GiSteyrAug } from "react-icons/gi";
import FormContext from "../context/FormContext";

function PrimaryWeapon() {
  const { form } = useContext(FormContext);

  let primary;
  switch (form.priWeapon) {
    case "smg":
      primary = <GiTec9 />;
      break;
    case "assaultRifle":
      primary = <GiAk47 />;
      break;
    case "pistol":
      primary = <GiPistolGun />;
      break;
    case "sniperRifle":
      primary = <GiSteyrAug />;
      break;
    default:
      primary = <div>Arma não encontrada</div>;
  }
  return primary;
}

export default PrimaryWeapon;
