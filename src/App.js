import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="h-100 w-100">
      <div className="mx-auto w-75 h-100 border d-flex border flex-column justify-content-center align-items-start">
        <ul className="d-flex flex-column justify-content-center align-items-center  h-100  border p-0 m-0">
          <li className="  p-0 d-flex ">
            <Link className=" d-flex  " to="/">
              <h2 className="text-danger textScale"> Portfolio </h2>
            </Link>
          </li>
          <li className="  p-0 d-flex ">
            <Link className=" d-flex  " to="/photography">
              <h2 className="text-danger textScale"> Photography </h2>
            </Link>
          </li>

          <li className=" p-0  d-flex">
            <Link className=" d-flex" to="/about">
              <h2 className="text-danger"> About Eric </h2>
            </Link>
          </li>

          <li className="p-0 d-flex  ">
            <Link className=" d-flex " to="/contact">
              <h2 className="text-danger"> Contact </h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
