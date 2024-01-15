import { Link } from "react-router-dom";
import "./App.css";
import background from "./images/background/background";

function App() {
  return (
    <div className="h-100 w-100 background-white-img">
      <div className="mx-auto w-75 h-100 d-flex flex-column justify-content-center align-items-center">
        <ul className="d-flex flex-column justify-content-center align-items-center  h-100  p-0 m-0">
          <li className="  p-0 d-flex ">
            <Link className=" d-flex font-transition " to="/">
              <span className="text-danger display-6"> Portfolio </span>
            </Link>
          </li>
          <li className="  p-0 d-flex ">
            <Link className=" d-flex  font-transition" to="/photography">
              <span className="text-danger display-6"> Photography </span>
            </Link>
          </li>

          <li className=" p-0  d-flex">
            <Link className=" d-flex font-transition" to="/about">
              <span className="text-danger display-6"> About Eric </span>
            </Link>
          </li>

          <li className="p-0 d-flex  ">
            <Link className=" d-flex font-transition" to="/contact">
              <span className="text-danger display-6"> Contact </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
