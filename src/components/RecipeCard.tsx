import { Fragment } from "react";

type RecipeCardProps = {
  recipe: any;
};

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  return (
    <Fragment>
      <div className="recipeCard">
        <img src={recipe.thumbnail_url} className="img" alt={recipe.name} />
        <div className="title">{recipe.name}</div>
      </div>
    </Fragment>
  );
};

export default RecipeCard;
