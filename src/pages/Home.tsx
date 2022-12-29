import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

import { responsiveNavbarData } from "../data/responsiveNavbarData";

import { getAllRecipes } from "../redux/middlewares/recipesMiddleware";
const Home = (): JSX.Element => {
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
      <ResponsiveNavbar data={responsiveNavbarData} />
      {recipes && <Main list={recipes.results} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      <Footer />
    </Fragment>
  );
};

export default Home;
