import React, { useContext } from "react";
import FormContext from "../context/FormContext.js";
import "./Card.css";
import PrimaryWeapon from "./PrimaryWeapon.js";
import PieRechart from "./PieRechart";
import SecondaryWeapon from "./SecondaryWeapon.js";
import Image from './image.png'
import Experiences from "./Experiences.js";

function Card() {
  const { form } = useContext(FormContext);

  return (
    <main className="ContainerBody">
      <h2 className="ContainerTitle">{`${form.playerName} - ${form.age}`}</h2>
      <section className="ContainerPersonal">
        <div>
          <div className="ContainerPersonalTeam">
            <p className="PersonalTeam">Time</p>
            <p className="PersonalTeamName">{form.team}</p>
          </div>
          <div className="ContainerPersonalRole">
            <p className="PersonalRole">Função</p>
            <p className="PersonalRoleText">{form.role}</p>
          </div>
          <p className="PersonalDescription">{form.description}</p>
        </div>
        {/* <img className="PersonalLogo" src={form.picture} alt="Opponent Logo" /> */}
        <div>
          <img className="PersonalLogo" src={Image} alt="Opponent Logo" />
          <section className="ContainerWeapons">
            <div className="WeaponsA1">
              <p>A1</p>
              <PrimaryWeapon className="weapons-a1-icon" />
            </div>
            <div className="WeaponsA2">
              <p>A2</p>
              <SecondaryWeapon className="weapons-a2-icon" />
            </div>
          </section>
        </div>
      </section>
      <section className="ContainerProfessional">
        <div>
          <p className="ProfessionalCharacteristics">Características</p>
          <PieRechart />
        </div>
        <div className="ProfessionalExperience">
          <p className="ProfessionalExperienceTitle">Experiências</p>
          <Experiences />
        </div>
      </section>
    </main>
  );
}

export default Card;
