import { Fragment } from "react";
import RecipeCard from "./RecipeCard";

type MainProps = {
  list: [];
};

const Main = ({ list }: MainProps): JSX.Element => {
  return (
    <Fragment>
      <div className="main">
        <div className="title">Nuevas Recetas</div>
        <div className="carousel">
          {list &&
            list.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
