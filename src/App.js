import { Link } from "react-router-dom";
import "./App.css";
import background from "./images/background/background";

function App() {
  return (
    <div className="h-100 w-100 background-white-img">
      <div className="mx-auto landing-container h-100 d-flex flex-column ">
        <ul className="d-flex flex-column   p-0  landing-list">
          <li className="  p-0 d-flex ">
            <Link className=" d-flex font-transition " to="/projects">
              <span className="landing-color display-6"> Projects </span>
            </Link>
          </li>
          <li className="  p-0 d-flex ">
            <Link className=" d-flex  font-transition" to="/photography">
              <span className="landing-color display-6"> Photography </span>
            </Link>
          </li>

          <li className=" p-0  d-flex">
            <Link className=" d-flex font-transition" to="/about">
              <span className="landing-color display-6"> About Eric </span>
            </Link>
          </li>

          <li className="p-0 d-flex  ">
            <Link className=" d-flex font-transition" to="/contact">
              <span className="landing-color display-6"> Contact </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
