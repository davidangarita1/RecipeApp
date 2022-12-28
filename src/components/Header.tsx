import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <nav>
          <div className="logo">
            <span className="first">Recipe</span>
            <span className="second">App</span>
          </div>
          <div className="navbar">
            <ul>
              <li className="selected">Home</li>
              <li>Vegetarianos</li>
              <li>Platos Principales</li>
              <li>Tortas</li>
              <li>Comida Rápida</li>
              <li>Menú Niños</li>
              <li>Sopas</li>
            </ul>
          </div>
        </nav>
        <div className="banner">
          <div className="title">
            <div className="first">Recetas</div>
            <div className="second">para todos</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
