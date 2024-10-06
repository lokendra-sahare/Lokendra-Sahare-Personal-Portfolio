import { Sidebar } from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <h1>
          Lokendra<span>.</span>
        </h1>
        <div className="buttons">
          <button>
            <a href="#Contact">Hire me</a>
          </button>
          <button>
            <a href="#">Download CV</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
