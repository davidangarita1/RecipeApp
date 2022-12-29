import { Fragment } from "react";

import { responsiveNavbarType } from "../types/responsiveNavbarType";

type ResponsiveNavbarProps = {
  data: responsiveNavbarType[];
};

const ResponsiveNavbar = ({ data }: ResponsiveNavbarProps): JSX.Element => {
  return (
    <Fragment>
      <div className="responsiveNavbar">
        {data.map((item: responsiveNavbarType, index: number) => (
          <div key={index} className="cardMenu">
            <img className="imgMenu" src={item.image} alt={item.title} />
            <span className="foodMenu">{item.title}</span>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ResponsiveNavbar;
