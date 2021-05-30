import { doctorData } from "../../asset/data/data";
import ParticlesHead from "../../components/customHead/ParticlesHead";
import ConsultContent from "../../components/ConsultContent/ConsultContent";
import "./Consult.css";
import { useState } from "react";
import ConsultModal from "../../components/ConsultModal/ConsultModal";

const Consult = () => {

  const [viewConf, setViewConf] = useState(false)


  const consultBtnClickHandler = () => {
    console.log("clicked")
    setViewConf(true)
  }

  const hideConsultModalkHandler = () => {
    setViewConf(false)
  }


  return (
    <div>
    {viewConf && <ConsultModal onHideModal = {hideConsultModalkHandler}/>}
      <ParticlesHead title="Talk to a Specialist?" type="thick" />
      <div id="consult">
        <div className="rowz">
          {doctorData.map(doctor => <ConsultContent btnClick = {consultBtnClickHandler} img = {doctor.img} name = {doctor.name} experience = {doctor.experience} about = {doctor.about} Why = {doctor.Why} Why2 = {doctor.Why2}/>)}
        </div>
      </div>
    </div>
  );
};

export default Consult;
