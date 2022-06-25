// import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const About = () => {
  const [flag, setFlag] = useContext(UserContext);
  // const [show, setShow] = useContext(UserContext);

  // const clickHandler = () => {
  //   setFlag(true);
  //   setShow(true);
  // };

  return (
    <div>
      <h4>Version 1.0.0</h4>
      <div
        style={{ cursor: "pointer" }}
        onClick={
          () => setFlag(true)
          // setShow(true);
        }
      >
        Go Back
      </div>
    </div>
  );
};

export default About;
