import './ConsultContent.css';
import Slide from 'react-reveal';
import Button from '../ConsultButton/ConsultButton';
import man from '../../asset/img/man.png'
import woman from '../../asset/img/woman.png'
const ConsultContent = (props) => {

    return (

        <Slide top duration={1300}>
          
            <div id ='consult-box'>
            <div id = "imgBox"><img src={props.img === 1 ?  woman : man} id = "docImage" alt='' /><Button onClickHandler = {props.btnClick}/></div>
              <div id = "info-box" className='consult-text'>
                <h2>{props.name}</h2>
                <span>&bull;</span><em className="date">Experience: {props.experience} Years</em>
                <p>{props.about}</p>
                <h4>Specialities:</h4>
                <div id = "WhyCont">
                  <div id = "why1">
                    <ul>
                      {props.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))}
                    </ul>
                  </div>
                  <div id = "why2">
                    <ul>
                    {props.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
    
    )
  }

  export default ConsultContent;