import withMenuItems from "../containers/WithMenuItems";
import FooterContext from "./FooterContext";

const FooterProvider = ({ menuItems, children }) => {
  return (
    <FooterContext.Provider value={menuItems}>
      {children}
    </FooterContext.Provider>
  );
};

export default withMenuItems("FOOTER_MENU")(FooterProvider);
