import React from 'react'
import {Link } from 'react-router-dom'
import './ConsultSection.scss'
import {BiCheckDouble} from 'react-icons/bi'

const ConsultSection = () => {
    return (
        <section className="consult" id="consult">
            <div className="container">
                <div className="section-title aos-init aos-animate" data-aos="zoom-out">
                    <h2>Consult</h2>
                    <h1 id="para">What's the need?</h1>
                </div>
                
                <div className="row content aos-init aos-animate" data-aos="fade-up">
                    <div className="col-lg-6 mr-6">
                        <p>The American Psychological Association suggests considering therapy when something causes distress and interferes with some part of life, particularly when:</p>
                        <ul>
                            <li>
                                <BiCheckDouble/>
                                Thinking about or coping with the issue takes up at least an hour each day
                            </li>
                            <li><BiCheckDouble/>The issue causes embarrassment or makes you want to avoid others</li>
                            <li><BiCheckDouble/>The issue has caused your quality of life to decrease</li>
                            <li><BiCheckDouble/>The issue has negatively affected school, work, or relationships</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>Psychotherapy, talk or talking therapy, counseling, or simply therapy—no matter the name it’s known by, mental health counseling can benefit people struggling with emotional difficulties, life challenges, and mental health concerns.</p>
                        <p>Therapy also offers a safe place to talk through life challenges such as breakups, grief, parenting difficulties, or family struggles.</p>
                        <Link to='#' className="btn-consult-now">Consult Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsultSection
