import React ,{useState,useEffect}from 'react'
import {useParams} from 'react-router'
import axios from 'axios'

import BlogHeader from '../../component/BlogHeader/BlogHeader'
import BlogLinks from '../../component/BlogLinks/BlogLinks'
import BlogJumbotron from '../../component/BlogJumbotron/BlogJumbotron'
import BlogMain from '../../component/BlogMain/BlogMain'

const BlogPage = () => {

    const [data,setdata]=useState({})
    const section=useParams();
 
    useEffect(() => {
        function fetchSectionData(section){
            axios.get(`http://localhost:3000/blog/${section.section}`)
            .then(res=>{
                setdata(res.data);
            })
            .catch(error =>{
                console.log("error in fetching the data", error)
            })
        }
        fetchSectionData(section);
    }, [section])

    return (
        <div className="container">
            <BlogHeader />
            <BlogLinks />
            <BlogJumbotron />
            <BlogMain data={data}/>
        </div>
    )
}

export default BlogPage
