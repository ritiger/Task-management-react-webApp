import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <Router>
      <div className="container">
        <Header
          onShow={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
        <Routes>
          <Route exact path="/" element={<Home showAddTask={showAddTask} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
