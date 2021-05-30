import Fade from "react-reveal";
import CommForm from "../CommForm/CommForm";
import styles from './AddCommPost.module.css';

const AddCommPost = () => {
  return (
    <section id="about" className = "sectionz">
      <Fade duration={1000}>
        <div className="divz row">
          <div className="divz nine columnsz main-colz">
            <h2 className = "heading2z" style = {{color: "#26001b"}}>Add Post Anonymously!</h2>
            <div className= {styles["new-post"]}>
             <CommForm/>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default AddCommPost;
