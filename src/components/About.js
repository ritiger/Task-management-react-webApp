// import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const About = () => {
  const { flag, show } = useContext(UserContext);
  const [flagValue, setFlagValue] = flag;
  const [showValue, setShowValue] = show;

  // const clickHandler = () => {
  //   setFlagValue(true);
  //   setShowValue(true);
  // };

  return (
    <div>
      <h4>Version 1.0.0</h4>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setFlagValue(true);
          setShowValue(true);
        }}
      >
        Go Back
      </div>
    </div>
  );
};

export default About;
