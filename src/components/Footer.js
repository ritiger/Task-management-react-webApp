import { useContext } from "react";
import UserContext from "../contexts/UserContext";
// import { Link } from "react-router-dom";

const Footer = () => {
  const [flag, setFlag] = useContext(UserContext);
  // const [show, setShow] = useContext(UserContext);

  return (
    <footer>
      <p>Copyright &copy;2022</p>
      <div
        style={{ cursor: "pointer" }}
        onClick={
          () => setFlag(false)
          // setShow(true);
        }
      >
        About
      </div>
    </footer>
  );
};

export default Footer;
