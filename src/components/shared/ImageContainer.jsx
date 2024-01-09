const ImageContainer = (props) => {
  return (
    <div className="d-flex flex-wrap">
      {props.album.map((index) => {
        return (
          <div className="w-25 p-1">
            <img className="rounded img-fluid" src={index}></img>
          </div>
        );
      })}
    </div>
  );
};
export default ImageContainer;
