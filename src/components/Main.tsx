import { Fragment } from "react";
import Carousel from "./Carousel";

type MainProps = {
  list: [];
};

const Main = ({ list }: MainProps): JSX.Element => {
  return (
    <Fragment>
      <div className="main">
        <div className="title">Nuevas Recetas</div>
        <Carousel list={list} />
      </div>
    </Fragment>
  );
};

export default Main;
