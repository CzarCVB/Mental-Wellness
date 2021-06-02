import React from 'react';
import ReactDOM from 'react-dom';
import classes from './CommModal.module.css';
import Snake from '../Snake-Game/SnakeGame'

const Backdrop = props => {
    return <div className = {classes.backdrop} onClick = {props.onClick}/>
}

const CommModal = props =>{

    return(<React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClick = {props.onHideModal}/>, document.getElementById('backdrop-root'))}
    {ReactDOM.createPortal(<Snake />, document.getElementById('overlay-root'))}
    </React.Fragment>
    )
}

export default CommModal;