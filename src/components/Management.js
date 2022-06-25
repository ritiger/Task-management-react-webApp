// import { useState, useEffect, useContext } from "react";
// import UserContext from "../contexts/UserContext";
// import Header from "./Header";
// import Footer from "./Footer";
// import Home from "./Home";
// import About from "./About";

// const Management = () => {
//   const [showAddTask, setShowAddTask] = useState(false);

//   const { flag, show } = useContext(UserContext);
//   const [flagValue, setFlagValue] = flag;
//   const [showValue, setShowValue] = show;

//   useEffect(() => {
//     console.log("[Flag Value]", flagValue, showValue);
//   }, [flagValue, showValue]);

//   return (
//     <div className="container">
//       <Header
//         onShow={() => setShowAddTask(!showAddTask)}
//         showAddTask={showAddTask}
//       />
//       {flagValue ? <Home showAddTask={showAddTask} /> : <About />}

//       <Footer />
//     </div>
//   );
// };

// export default Management;

//////////////////////////////// Using useReducer //////////////////////////////////

import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";

const Management = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const {
    state: { flag, show },
    dispatch,
  } = useContext(UserContext);

  useEffect(() => {
    console.log("[Flag Value]", flag, show);
  }, [flag, show]);

  return (
    <div className="container">
      <Header
        onShow={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {flag ? <Home showAddTask={showAddTask} /> : <About />}

      <Footer />
    </div>
  );
};

export default Management;
