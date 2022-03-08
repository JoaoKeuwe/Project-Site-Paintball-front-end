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
  
  const [fullStarsFri, setFullStarsFri] = useState(0);
  const [fullStarsReg, setFullStarsReg] = useState(0);
  const [fullStarsSta, setFullStarsSta] = useState(0);
  const [fullStarsNat, setFullStarsNat] = useState(0);
  const [fullStarsInt, setFullStarsInt] = useState(0);

  useEffect(() => {
    setFullStarsFri(fillStar(form.friendly));
    setFullStarsReg(fillStar(form.regional));
    setFullStarsSta(fillStar(form.state));
    setFullStarsNat(fillStar(form.national));
    setFullStarsInt(fillStar(form.international));
  }, [form.friendly, form.regional, form.state, form.national, form.international])
  
  useEffect(() => {
    const starFri = 3 - fullStarsFri;
    const starReg = 3 - fullStarsReg;
    const starSta = 3 - fullStarsSta;
    const starNat = 3 - fullStarsNat;
    const starInt = 3 - fullStarsInt;
    console.log(starFri)

    setEmptyStarsFri(starFri);
    setEmptyStarsReg(starReg);
    setEmptyStarsSta(starSta);
    setEmptyStarsNat(starNat);
    setEmptyStarsInt(starInt);
  }, [fullStarsFri, fullStarsReg, fullStarsSta, fullStarsNat, fullStarsInt]);

  function fillStar(games) {
    let star;
    switch (true) {
      case +games >= 15:
        star = 3
        break;
      case +games >= 10:
        star = 2
        break;
      case +games >= 5:
        star = 1
        break;
      default:
        star = 0
    }
    return star;
  }
  
  return(
    <section className="Experiences">
          <div className="ExperienceA">
            <p>A</p>
            <div>
              {[...Array(fullStarsFri)].map((star, index) => {
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
              {[...Array(fullStarsReg)].map((star, index) => {
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
              {[...Array(fullStarsSta)].map((star, index) => {
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
              {[...Array(fullStarsNat)].map((star, index) => {
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
              {[...Array(fullStarsInt)].map((star, index) => {
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
