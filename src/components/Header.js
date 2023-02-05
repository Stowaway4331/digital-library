import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faPerson } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">
        <span>digital</span>library
      </h1>
      <div className="header-icons">
        <FontAwesomeIcon icon={faCartPlus} />
        <FontAwesomeIcon icon={faPerson} />
      </div>
    </div>
  );
};

export default Header;
