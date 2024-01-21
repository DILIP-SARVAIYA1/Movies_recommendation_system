import React from "react";
import { APP_LOGO } from "../Utils/constants";

const Header = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black flex justify-between items-center px-10 py-2 md:px-24">
        <img className="w-32 md:w-48" src={APP_LOGO} alt="Background Img" />
      </div>
    </div>
  );
};

export default Header;
