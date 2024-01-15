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
  const [fadeIn, setFadeIn] = useState("img-animation");

  useEffect(() => {
    setTimeout(() => {
      setFadeIn("");
    }, 1000);
  }, []);
  const fade = () => {
    console.log(fadeIn);
    setFadeIn("img-animation");
    console.log(fadeIn);
    setTimeout(() => {
      setFadeIn("");
    }, 1000);
  };

  const albumArray = [chicago, mtl, columbus, columbusBW, utsc, scarb];

  const albumDisplayName = (albumIndex) => {
    switch (albumIndex) {
      case chicago:
        return "chicago";
      case mtl:
        return "montreal";
      case columbus:
        return "columbus";
      case columbusBW:
        return "columbus B/W";
      case utsc:
        return "utsc";
      case scarb:
        return "scarborough";
    }
  };

  return (
    <div>
      <Nav />
      <h1 className="ml-4 my-3">PHOTOGRAPHY</h1>
      <div className="mb-4 ml-3">
        {albumArray.map((album, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${albumName === album ? "active-btn" : ""} ml-2`}
              onClick={() => {
                setAlbumName(album);
                fade();
              }}>
              <span className="p-2">{albumDisplayName(album)}</span>
            </button>
          );
        })}
      </div>
      <div className="mx-3">
        <ImageContainer album={albumName} fade={fadeIn} />
      </div>
    </div>
  );
};

export default Photography;
