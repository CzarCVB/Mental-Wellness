import './ConsultButton.css'
const ConsultButton = (props) => {
  return (
    <div id ="btn-wrappper">
      <button id="consultBtn" onClick = {props.onClickHandler}>Consult Now?</button>
    </div>
  );
};


export default ConsultButton;