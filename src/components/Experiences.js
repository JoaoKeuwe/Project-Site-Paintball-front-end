import React, { useContext, useEffect, useState } from 'react'
import FormContext from '../context/FormContext';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function Experiences() {
  const { form } = useContext(FormContext);
  const [emptyStarsFri, setEmptyStarsFri] = useState(0);
  const [emptyStarsReg, setEmptyStarsReg] = useState(0);
  const [emptyStarsSta, setEmptyStarsSta] = useState(0);
  const [emptyStarsNat, setEmptyStarsNat] = useState(0);
  const [emptyStarsInt, setEmptyStarsInt] = useState(0);

  useEffect(() => {
    const starFri = 3 - Number(form.friendly);
    const starReg = 3 - Number(form.regional);
    const starSta = 3 - Number(form.state);
    const starNat = 3 - Number(form.national);
    const starInt = 3 - Number(form.international);

    setEmptyStarsFri(starFri);
    setEmptyStarsReg(starReg);
    setEmptyStarsSta(starSta);
    setEmptyStarsNat(starNat);
    setEmptyStarsInt(starInt);
  }, [form.friendly, form.regional, form.state, form.national, form.international]);
  
  return(
    <section className="Experiences">
          <div className="ExperienceA">
            <p>A</p>
            <div>
              {[...Array(form.friendly)].map((star, index) => {
                return <AiFillStar key={index} />;
              })}
              {[...Array(emptyStarsFri)].map((star, index) => {
                return <AiOutlineStar key={index} />;
              })}
            </div>
            <p className="ExperienceANumber">{form.friendly}</p>
          </div>
          <div className="ExperienceR">
            <p>R</p>
            <div>
              {[...Array(form.regional)].map((star, index) => {
                return <AiFillStar key={index}/>;
              })}
              {[...Array(emptyStarsReg)].map((star, index) => {
                return <AiOutlineStar key={index} />;
              })}
            </div>
            <p className="ExperienceANumber">{form.regional}</p>
          </div>
          <div className="ExperienceE">
            <p>E</p>
            <div>
              {[...Array(form.state)].map((star, index) => {
                return <AiFillStar key={index} />;
              })}
              {[...Array(emptyStarsSta)].map((star, index) => {
                return <AiOutlineStar key={index} />;
              })}
            </div>
            <p className="ExperienceANumber">{form.state}</p>
          </div>
          <div className="ExperienceN">
            <p>N</p>
            <div>
              {[...Array(form.national)].map((star, index) => {
                return <AiFillStar key={index} />;
              })}
              {[...Array(emptyStarsNat)].map((star, index) => {
                return <AiOutlineStar key={index} />;
              })}
            </div>
            <p className="ExperienceANumber">{form.national}</p>
          </div>
          <div className="ExperienceI">
            <p>I</p>
            <div>
              {[...Array(form.international)].map((star, index) => {
                return <AiFillStar key={index} />;
              })}
              {[...Array(emptyStarsInt)].map((star, index) => {
                return <AiOutlineStar key={index} />;
              })}
            </div>
            <p className="ExperienceANumber">{form.international}</p>
          </div>
        </section>
  )
}

export default Experiences;
