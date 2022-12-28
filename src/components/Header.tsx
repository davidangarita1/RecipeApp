import { Fragment } from "react";
import { navBarData } from "../data/navBarData";

import { navBarType } from "../types/navBarType";

const Header = (): JSX.Element => {
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
              {navBarData.map((item: navBarType, index: number) => (
                <li className={item.cName} key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-home"></div>
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
