import { Fragment } from "react";

import RecipeCard from "./RecipeCard";

type CarouselProps = {
  list: [];
};

const Carousel = ({ list }: CarouselProps) => {
  return (
    <Fragment>
      <div className="carousel">
        {list &&
          list.map((recipe: any, index: number) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
      </div>
    </Fragment>
  );
};

export default Carousel;
