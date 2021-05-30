import { Fragment } from "react";
import Fade from "react-reveal";
import ParticlesBg from "particles-bg";
import './ParticlesHead.css'
const ParticlesHead = (props) => {
  return (
    <Fragment>
      <div id="communityHeading" className = "particle-divz">
        <Fade bottom>
          <h1>{props.title}</h1>
        </Fade>
      </div>
      <ParticlesBg
        num={props.num ? Number(props.num) : 30 }
        type={props.type}
        bg={{
          height: 500,
          width: "100%",
          postion: "absolute",
          zIndex: "auto",
          backgroundColor: "black"
        }}
      />
    </Fragment>
  );
};

export default ParticlesHead;
