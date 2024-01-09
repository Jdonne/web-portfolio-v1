import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Nav = (props) => {
  const [page, setPage] = useState({
    contact: "",
    projects: "",
    about: "",
  });

  // hightlight page on navbar
  useEffect(() => {
    if (window.location.pathname.slice(1) === "contact") {
      setPage({ projects: "", contact: "clicked", about: "" });
    } else if (window.location.pathname.slice(1) === "about") {
      setPage({ projects: "", contact: "", about: "clicked" });
    } else if (window.location.pathname.slice(1) === "projects") {
      setPage({ projects: "clicked", contact: "", about: "" });
    }
  }, []);

  return (
    <div className="navbar justify-content-end nav-bg pr-4 ">
      <Link to="/" className="p-2 mx-1 link">
        <div className="text-dark">Home</div>
      </Link>
      <Link
        to="/projects"
        className={page.projects + " text-dark p-2 mx-1 link"}
        id="projects">
        Projects
      </Link>{" "}
      <Link
        to="/about"
        className={page.about + " text-dark p-2 mx-1 link"}
        id="about">
        About
      </Link>
      <Link
        to="/contact"
        className={page.contact + " text-dark p-2 mx-1 link"}
        id="contact">
        Contact
      </Link>{" "}
    </div>
  );
};
export default Nav;
