const ImageContainer = (props) => {
  return (
    <div className="d-flex flex-wrap">
      {props.album.map((index) => {
        return (
          <div className="w-25 p-1 ">
            <img
              className={`rounded-imgs img-fluid ${props.fade}`}
              src={index}
              loading="lazy"></img>
          </div>
        );
      })}
    </div>
  );
};
export default ImageContainer;
