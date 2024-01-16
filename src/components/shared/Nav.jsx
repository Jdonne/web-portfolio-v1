import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Nav = (props) => {
  const [page, setPage] = useState({
    photography: "",
    contact: "",
    projects: "",
    about: "",
  });

  // hightlight page on navbar
  useEffect(() => {
    if (window.location.pathname.slice(1) === "contact") {
      setPage({ photography: "", projects: "", contact: "clicked", about: "" });
    } else if (window.location.pathname.slice(1) === "about") {
      setPage({ photography: "", projects: "", contact: "", about: "clicked" });
    } else if (window.location.pathname.slice(1) === "projects") {
      setPage({ photography: "", projects: "clicked", contact: "", about: "" });
    } else if (window.location.pathname.slice(1) === "photography") {
      setPage({
        photography: "clicked",
        projects: "",
        contact: "",
        about: "",
      });
    }
  }, []);

  return (
    <div className="navbar justify-content-end nav-bg pr-4 ">
      <Link to="/" className="p-2 mx-1 link rounded-img">
        <div className="text-dark">Home</div>
      </Link>
      <Link
        to="/projects"
        className={page.projects + " text-dark p-2 mx-1 link rounded-imgs"}
        id="projects">
        Projects
      </Link>{" "}
      <Link
        to="/photography"
        className={page.photography + " text-dark p-2 mx-1 link rounded-imgs"}
        id="projects">
        Photography
      </Link>{" "}
      <Link
        to="/about"
        className={page.about + " text-dark p-2 mx-1 link rounded-imgs"}
        id="about">
        About
      </Link>
      <Link
        to="/contact"
        className={page.contact + " text-dark p-2 mx-1 link rounded-imgs"}
        id="contact">
        Contact
      </Link>{" "}
    </div>
  );
};
export default Nav;
