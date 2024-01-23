const ImageContainer = ({ fade, album }) => {
  const desktopColSize = Math.ceil(album.length * 0.25);
  const mobileColSize = Math.ceil(album.length * 0.5);

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const displayCols = (col) => {
    return chunk(album, col).map((chunk, index) => {
      return (
        <div className="d-flex flex-column " key={"col" + index}>
          {chunk.map((img, index) => {
            return (
              <div className=" p-1 ">
                <img
                  className={`rounded-imgs img-fluid ${fade}`}
                  src={img}
                  loading="lazy"
                  alt={"img" + index}></img>
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <>
      <div className=" desktop-display">{displayCols(desktopColSize)}</div>
      <div className=" mobile-display">{displayCols(mobileColSize)}</div>
    </>
  );
};
export default ImageContainer;
