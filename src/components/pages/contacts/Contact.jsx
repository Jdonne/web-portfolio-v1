import Nav from "../../shared/Nav";
import contact from "./content";
import ProjectCard from "../../shared/ProjectCard";
const Contact = () => {
  return (
    <div>
      <Nav />
      <h1 className="text-center my-3">Contact</h1>
      <div className="d-flex align-items-center flex-column">
        <ProjectCard content={contact.content} img={contact.img} />
      </div>
    </div>
  );
};

export default Contact;
