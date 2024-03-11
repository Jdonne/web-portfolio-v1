const ProjectCard = ({ content, img, title }) => {
  return (
    <div className="card-main-width d-flex p-3  mb-3 fadein-animation card-border">
      {img && (
        <div className="card-img-width">
          <img
            src={img}
            className="rounded-imgs img-fluid "
            loading="lazy"></img>
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
