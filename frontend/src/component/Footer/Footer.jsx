import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {GrInstagram ,GrSkype} from 'react-icons/gr'
import {ImLinkedin} from 'react-icons/im'
import './Footer.scss'
const Footer = () => {
    return (
       <footer id="footer" className="footer">
           <div className="container">
                <h3>WE ARE HERE FOR YOU!</h3>
                <p>A self-improvement project with a focus on Personal Productivity, Motivation & Self Education. The goal is to create an environment of mutual support, where people can meet from all across the globe to solve problems related to anxiety, depression, negative thinking, stress, moodiness & other mental illness.</p>
           </div>
           <div className="social-links">
                <Link to="#"> <AiFillTwitterCircle/></Link>
                <Link to="#"> <FaFacebook/></Link>
                <Link to="#"> <GrInstagram/></Link>
                <Link to="#"> <GrSkype/></Link>
                <Link to="#"><ImLinkedin /></Link>
           </div>
       </footer>
    )
}

export default Footer
