const ProjectCard = ({ content, img, title }) => {
  return (
    <div className="w-75 d-flex p-3 rounded-imgs mb-3 nav-bg fadein-animation">
      {img && (
        <div className="card-img-width">
          <img src={img} className="rounded-imgs" loading="lazy"></img>
        </div>
      )}
      <div className={img ? "card-content-width" : "w-100"}>
        {title && <h2>{title}</h2>}

        <span>{content}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
