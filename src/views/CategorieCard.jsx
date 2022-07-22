import React from "react";
import { NavItem, NavLink } from "reactstrap";

const CategorieCard = (props) => {
  const changeTab = () => {
    props.setActiveTab(props.tabId);
  };
  return (
    <NavItem>
      <NavLink className="active" value="1" onClick={changeTab}>
        Tab1
      </NavLink>
    </NavItem>
  );
};

export default CategorieCard;
