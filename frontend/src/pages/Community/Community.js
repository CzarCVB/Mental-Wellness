
import CommPost from "../../components/CommPost/CommPost";
import AddCommPost from "../../components/AddCommPost/AddCommPost";
import CommBtn from '../../components/CommBtn/CommBtn';
import { useState } from "react";
import CommModal from "../../components/CommModal/CommModal";
import ParticlesHead from '../../components/customHead/ParticlesHead';
import './Community.css'

const Community = () => {

  const [viewGame, setViewGame] = useState(false)

  const btnClickHandler = () => {
    setViewGame(true);
  }

  const hideModalHandler = () => {
    setViewGame(false);
  }

  return (
    <div className = "divz">
    {viewGame && <CommModal onHideModal = {hideModalHandler} />}
      <div className = "divz">
      <CommBtn onBtnClickHandler = {btnClickHandler}/>
      <ParticlesHead type = "lines" title = "Community" />
      </div>
      <AddCommPost />
      <section id="resume"  className = "sectionz">
        <CommPost />
      </section>
      
    </div>
  );
};

export default Community;
