const ProjectCard = ({ content, img, title }) => {
  return (
    <div className="w-75 d-flex border p-3 rounded-imgs mb-3 nav-bg fadein-animation">
      <div className="w-25">
        <img src={img}></img>
      </div>
      <div className="w-75">
        <h2>{title}</h2>
        <span>hellow world{content}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
