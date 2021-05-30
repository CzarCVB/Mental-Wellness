import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
import './Mainbody.scss'

import ConsultSection from '../ConsultSection/ConsultSection'
import Meditation from '../Meditation/Meditation'

const Mainbody = () => {
    const [data,setdata] =useState({})

    useEffect(()=>{
        function fetchSectionData(){
            axios.get(`https://mental-wellness.herokuapp.com/blog/`)
            .then(res=>{
                console.log(res.data);
                setdata(res.data);
            })
            .catch(error =>{
                console.log("error in fetching the data", error)
            })
        }
        fetchSectionData();
    }, [])
    return (
        <section id="services" className="services">
            <div className="container ">
                <div className="section-title aos-init aosianimate" data-aos="zoom-in-left">
                    <h2>Blogs</h2>
                    <p>What do we offer</p>
                </div>
                <div className="row offer">
                     { data.length &&
                        data.map(section=>(
                            <div className="col-lg-4 col-md-6 mt-5 " key={section._id}>
                                <div className="icon-box aos-init aos-animate" data-aos="zoom-in-left" data-aos-delay="100">
                                    <div className="icon">
                                    </div>
                                    <h4 className="title">{section.title}</h4>
                                    <p className="description">
                                        {section.about.slice(0,80)}
                                        ...<Link to ={`/blog/${section.title}`}>Read more</Link>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <Meditation/>
                <ConsultSection />
            </div>
        </section>
    )
}

export default Mainbody
