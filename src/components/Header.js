import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onShow}
      />
    </header>
  );
};

Header.defaultProps = { title: "Task Tracker" };

Header.propTypes = { title: PropTypes.string.isRequired };

export default Header;
