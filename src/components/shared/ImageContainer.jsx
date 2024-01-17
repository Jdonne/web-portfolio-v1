const ImageContainer = ({ fade, album }) => {
  return (
    <div className="d-flex flex-wrap">
      {album.map((index) => {
        return (
          <div className="photo-width p-1 ">
            <img
              className={`rounded-imgs img-fluid ${fade}`}
              src={index}
              loading="lazy"></img>
          </div>
        );
      })}
    </div>
  );
};
export default ImageContainer;
