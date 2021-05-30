import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ConsultModal.module.css';
import ConfMsg from "../ConfMsg/ConfMsg";
const Backdrop = props => {
    return <div className = {classes.backdrop} onClick = {props.onClick}/>
}

const Modal = props =>{

    return(<React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClick = {props.onHideModal}/>, document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<ConfMsg />, document.getElementById('overlay-root'))}
    </React.Fragment>
    )
}

export default Modal;