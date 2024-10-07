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
            <a
              href="https://drive.google.com/file/d/1rdrkaRIa3Z1Y7cYlrhe-eNf0oSOoKRh1/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
