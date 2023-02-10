import Flippy, { FrontSide, BackSide } from "react-flippy";
import CardComponent from "./CardComponent";
import { CardBackSide, CardFront } from "./CardSides";

export const ProjectCard = ({ project }) => {
  return (
    <Flippy
      flipOnHover={true}
      flipOnClick={false}
      flipDirection="horizontal"
      style={{ width: "300px", height: "400px", border: "none" }}
    >
      <FrontSide
        style={{
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardComponent bgColor={"white"}>
          <CardFront project={project} />
        </CardComponent>
      </FrontSide>
      <BackSide
        style={{
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardComponent bgColor={"black"}>
          <CardBackSide project={project} />
        </CardComponent>
      </BackSide>
    </Flippy>
  );
};
export default ProjectCard;
