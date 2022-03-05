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
    const starFri = 2 - Number(form.friendly);
    const starReg = 2 - Number(form.regional);
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
              {[...Array(form.friendly)].map((star) => {
                return <AiFillStar />;
              })}
              {[...Array(emptyStarsFri)].map((star) => {
                return <AiOutlineStar />;
              })}
            </div>
          </div>
          <div className="ExperienceR">
            <p>R</p>
            <div>
              {[...Array(form.regional)].map((star) => {
                return <AiFillStar />;
              })}
              {[...Array(emptyStarsReg)].map((star) => {
                return <AiOutlineStar />;
              })}
            </div>
          </div>
          <div className="ExperienceE">
            <p>E</p>
            <div>
              {[...Array(form.state)].map((star) => {
                return <AiFillStar />;
              })}
              {[...Array(emptyStarsSta)].map((star) => {
                return <AiOutlineStar />;
              })}
            </div>
          </div>
          <div className="ExperienceN">
            <p>N</p>
            <div>
              {[...Array(form.national)].map((star) => {
                return <AiFillStar />;
              })}
              {[...Array(emptyStarsNat)].map((star) => {
                return <AiOutlineStar />;
              })}
            </div>
          </div>
          <div className="ExperienceI">
            <p>I</p>
            <div>
              {[...Array(form.international)].map((star) => {
                return <AiFillStar />;
              })}
              {[...Array(emptyStarsInt)].map((star) => {
                return <AiOutlineStar />;
              })}
            </div>
          </div>
        </section>
  )
}

export default Experiences;
