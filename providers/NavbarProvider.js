import React from "react";
import withMenuItems from "../containers/WithMenuItems";
import NavbarContext from "./NavbarContext";

const NavbarProvider = ({ menuItems, children }) => {
  return (
    <NavbarContext.Provider value={menuItems}>
      {children}
    </NavbarContext.Provider>
  );
};

export default withMenuItems("NAVBAR_MENU")(NavbarProvider);
