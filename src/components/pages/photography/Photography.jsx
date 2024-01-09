import Nav from "../../shared/Nav";
import ImageContainer from "../../shared/ImageContainer";
import chicago from "../../../images/film/chicago/chicago";
const Photography = () => {
  return (
    <div>
      <Nav />
      <div>PHOTOGRAPHY</div>
      <ImageContainer album={chicago} />
    </div>
  );
};

export default Photography;
