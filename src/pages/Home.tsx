import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";

import { getAllRecipes } from "../redux/middlewares/recipesMiddleware";
const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, recipes, error } = useSelector(
    (state: any) => state.recipes
  );

  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);

  return (
    <Fragment>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {recipes && recipes.count}
    </Fragment>
  );
};

export default Home;
