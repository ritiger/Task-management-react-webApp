import { useContext } from "react";
import UserContext from "../contexts/UserContext";
// import { Link } from "react-router-dom";

const Footer = () => {
  const { flag, show } = useContext(UserContext);
  const [flagValue, setFlagValue] = flag;
  const [showValue, setShowValue] = show;

  return (
    <footer>
      <p>Copyright &copy;2022</p>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setFlagValue(false);
          setShowValue(false);
        }}
      >
        About
      </div>
    </footer>
  );
};

export default Footer;
