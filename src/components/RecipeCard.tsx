import { Fragment, useState } from "react";

import portion from "../assets/icons/ic_portion.svg";
import time from "../assets/icons/ic_time.svg";

type RecipeCardProps = {
  recipe: any;
};

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  const [active, setActive] = useState(false);

  return (
    <Fragment>
      <div
        className={`recipeCard ${active ? "show" : ""}`}
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
      >
        <img src={recipe.thumbnail_url} className="img" alt={recipe.name} />
        {active ? (
          <div className="menu">
            <img src={portion} alt="" />
            <span className="subTitle">Tamaño de la porción</span>
            <div>{recipe.num_servings} raciones</div>
            <img src={time} alt="" />
            <span className="subTitle">Tiempo de preparación</span>
            <div>{recipe.total_time_minutes} minutos</div>
          </div>
        ) : (
          <div className="title">{recipe.name}</div>
        )}
      </div>
    </Fragment>
  );
};

export default RecipeCard;
