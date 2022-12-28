import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { getAllRecipes } from "../redux/middlewares/recipesMiddleware";
const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, recipes, error } = useSelector(
    (state: any) => state.recipes
  );

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {recipes && recipes.count}
      <Footer />
    </Fragment>
  );
};

export default Home;
