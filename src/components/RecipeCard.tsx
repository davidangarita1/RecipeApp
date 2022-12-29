import { Fragment, useEffect, useState } from "react";

import portion from "../assets/icons/ic_portion.svg";
import time from "../assets/icons/ic_time.svg";
import difficultyImg from "../assets/icons/ic_chef.svg";
import star from "../assets/icons/ic_star.svg";
import favorite from "../assets/icons/ic-favorite.svg";

type RecipeCardProps = {
  recipe: any;
};

const MAX_WIDTH: number = 768;

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  const [active, setActive] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  const difficultyList: string[] = ["Fácil", "Normal", "Difícil"];
  const score: string = (Math.trunc(Math.random() * 5) + 1).toFixed(1);
  const difficulty: string = difficultyList[Math.trunc(Math.random() * 3)];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MAX_WIDTH) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getShortName = (name: string): JSX.Element => (
    <>
      <span className="firstText">{name.split(" ")[0]} </span>
      <span className="secondText">{`${name.split(" ")[1]}`}</span>
    </>
  );

  return (
    <Fragment>
      <div
        className={`recipeCard ${active ? "show" : ""}`}
        onMouseOver={() => {
          smallScreen ? setActive(true) : setActive(false);
        }}
        onMouseOut={() => setActive(false)}
      >
        <img src={recipe.thumbnail_url} className="img" alt={recipe.name} />
        {active ? (
          <div className="menu">
            <img src={portion} alt="" />
            <span className="subTitle">Tamaño de la porción</span>
            <span className="text">{recipe.num_servings} raciones</span>
            <img src={time} alt="" />
            <span className="subTitle">Tiempo de preparación</span>
            <span className="text">{recipe.total_time_minutes} minutos</span>
            <img src={difficultyImg} alt="" />
            <span className="subTitle">Dificultad</span>
            <span className="text">{difficulty}</span>
          </div>
        ) : (
          <>
            <div className="cardTitle">{getShortName(recipe.name)}</div>
            <div className="score">
              <img className="star" src={star} alt="" />
              <span>{score}</span>
              <img className="heart" src={favorite} alt="" />
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default RecipeCard;
