import { Fragment } from "react";

import products from "../assets/Grupo_7610.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <div className="text">
          <span>Con el patrocinio de</span>
        </div>
        <img className="img" src={products} alt="productos" />
      </div>
    </Fragment>
  );
};

export default Footer;
