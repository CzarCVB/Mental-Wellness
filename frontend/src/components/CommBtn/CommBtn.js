import { Fragment } from 'react';
import Fade from 'react-reveal';
import './CommBtn.css'
const CommBtn = (props) => {
  const btnStyles = {
    position: "absolute",
    zIndex: 20,
    marginLeft: "39%",
    marginTop: "18%",
    borderRadius: "20px"
  };
  const btnStyles1 = {
    position: "absolute",
    zIndex: 20,
    marginLeft: "51%",
    marginTop: "18%",
    borderRadius: "20px",
    color: "white",
    background: "white",
  };

  return (
    <Fragment>
      <Fade bottom>
    <button style={btnStyles} onClick={props.onBtnClickHandler} id = "commBtnz" >
      Play Snake Game?
    </button>
    </Fade>
    <Fade bottom>
    
    <button style={btnStyles1} id = "commBtnz">
    <a id = "anchorette" href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
    Free T-shirt Giveaway! 
    </a>
    </button>
    </Fade>
    </Fragment>
  );
};

export default CommBtn;
