
import ParticlesHead from "../../components/customHead/ParticlesHead";
import QFlip from "../../components/QFlip/QFlip";
import QSearch from "../../components/QSearch/QBar";
import './FAQ.css'
const FAQ = () => {
 
  return (
    <div>
      <ParticlesHead type="colors" title="FAQs" num="6" />
      <section id="resume" className = "marginez sectionz">
        <QSearch/>
      </section>
      <section id="resume" className = "sectionz">
        <QFlip/>
      </section>
    </div>
  );
};

export default FAQ;
