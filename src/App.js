import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="h-100 w-100 background-white-img">
      <div className="mx-auto landing-container h-100 d-flex flex-column ">
        <h1 className="sr-only">Eric's Portfolio</h1>
        <ul className="d-flex flex-column   p-0  landing-list">
          <li className="p-0 d-flex">
            <h2>
              <Link className=" d-flex font-transition " to="/projects">
                <span className="landing-color display-6"> Projects </span>
              </Link>
            </h2>
          </li>
          <li className="p-0 d-flex">
            <h2>
              <Link className=" d-flex  font-transition" to="/photography">
                <span className="landing-color display-6"> Photography </span>
              </Link>
            </h2>
          </li>

          <li className=" p-0 d-flex">
            <h2>
              <Link className=" d-flex font-transition" to="/about">
                <span className="landing-color display-6"> About Eric </span>
              </Link>
            </h2>
          </li>

          <li className="p-0 d-flex">
            <h2>
              <Link className=" d-flex font-transition" to="/contact">
                <span className="landing-color display-6"> Contact </span>
              </Link>
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
