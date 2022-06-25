// import PropTypes from "prop-types";
// // import { useLocation } from "react-router-dom";
// import Button from "./Button";
// import { useContext } from "react";
// import UserContext from "../contexts/UserContext";

// const Header = ({ title, onShow, showAddTask }) => {
//   // const location = useLocation();
//   const { flag, show } = useContext(UserContext);
//   const [flagValue, setFlagValue] = flag;
//   const [showValue, setShowValue] = show;

//   return (
//     <header className="header">
//       <h1>{title}</h1>
//       {/* {location.pathname === "/" && ( */}
//       {showValue && (
//         <Button
//           color={showAddTask ? "red" : "green"}
//           text={showAddTask ? "Close" : "Add"}
//           onClick={onShow}
//         />
//       )}
//       {/* )} */}
//     </header>
//   );
// };

// Header.defaultProps = { title: "Task Tracker" };

// Header.propTypes = { title: PropTypes.string.isRequired };

// export default Header;

//////////////////////////////// Using useReducer //////////////////////////////////

import PropTypes from "prop-types";
import Button from "./Button";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Header = ({ title, onShow, showAddTask }) => {
  const {
    state: { flag, show },
    dispatch,
  } = useContext(UserContext);

  return (
    <header className="header">
      <h1>{title}</h1>
      {show && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onShow}
        />
      )}
    </header>
  );
};

Header.defaultProps = { title: "Task Tracker" };

Header.propTypes = { title: PropTypes.string.isRequired };

export default Header;
