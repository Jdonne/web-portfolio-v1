import Nav from "../../shared/Nav";
import ImageContainer from "../../shared/ImageContainer";
import chicago from "../../../images/film/chicago/chicago";
import mtl from "../../../images/film/mtl/mtl";
import columbus from "../../../images/film/columbus/columbus";
import columbusBW from "../../../images/film/columbus-bw/columbus-bw";
import utsc from "../../../images/film/utsc/utsc";
import scarb from "../../../images/film/scarb/scarb";

import { useEffect, useState } from "react";
const Photography = () => {
  const [albumName, setAlbumName] = useState(chicago);
  const [fadeIn, setFadeIn] = useState("fadein-animation");

  useEffect(() => {
    setTimeout(() => {
      setFadeIn("");
    }, 1000);
  }, []);
  const fade = () => {
    console.log(fadeIn);
    setFadeIn("fadein-animation");
    console.log(fadeIn);
    setTimeout(() => {
      setFadeIn("");
    }, 1000);
  };

  const albumArray = [chicago, mtl, columbus, columbusBW, utsc, scarb];

  const albumDisplayName = (albumIndex) => {
    switch (albumIndex) {
      case chicago:
        return { albumDisplay: "chicago", filmType: "Cinestell 800T" };
      case mtl:
        return {
          albumDisplay: "montreal",
          filmType: "Fuji Susperia X-TRA 400",
        };
      case columbus:
        return { albumDisplay: "columbus", filmType: "Kodak Ultramax 400" };
      case columbusBW:
        return {
          albumDisplay: "columbus B/W",
          filmType: "Ilford HP5 Plus 400",
        };
      case utsc:
        return { albumDisplay: "utsc", filmType: "Fuji Susperia X-TRA 400" };
      case scarb:
        return { albumDisplay: "scarborough", filmType: "Kodak Ultramax 400" };
    }
  };

  return (
    <div>
      <Nav />
      {/* <h1 className="ml-4 my-3">Photography</h1>
      <div className="mb-3 ml-3">
        {albumArray.map((album, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${albumName === album ? "active-btn" : ""} ml-2 mb-2`}
              onClick={() => {
                setAlbumName(album);
                fade();
              }}>
              <span className="p-2">
                {albumDisplayName(album).albumDisplay}
              </span>
            </button>
          );
        })}
      </div> */}
      <div className="d-flex justify-content-between flex-wrap">
        <h1 className="ml-4 my-3">Photography</h1>
        <div className="ml-3 mb-2 mr-4 pb-1 d-flex align-items-end flex-wrap">
          {albumArray.map((album, index) => {
            return (
              <button
                key={index}
                type="button"
                className={`${
                  albumName === album ? "active-btn" : ""
                } ml-2 mb-2`}
                onClick={() => {
                  setAlbumName(album);
                  fade();
                }}>
                <span className="p-2">
                  {albumDisplayName(album).albumDisplay}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={"text-center my-5 " + fadeIn}>
        <strong>Film:</strong>{" "}
        <span>{albumDisplayName(albumName).filmType}</span>
      </div>
      <div className="mx-3">
        <ImageContainer album={albumName} fade={fadeIn} />
      </div>
    </div>
  );
};

export default Photography;
