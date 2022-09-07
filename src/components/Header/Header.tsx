import * as Styles from "./Styles";

const Header = () => {
  return (
    <Styles.Image
      style={{ width: "250px" }}
      src={require("../../assets/images/pipedrive.svg").default}
      alt="mySvgImage"
    />
  );
};
export default Header;
