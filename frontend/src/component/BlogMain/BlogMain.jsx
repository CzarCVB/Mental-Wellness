import React  from 'react'
import {Link} from 'react-router-dom'

const BlogMain = ({data}) => {
    
    return (
        <div className="row g-5">
           <div className="col-md-8">
                <h3 className="pb-4 mb-4 mt-4 fst-italic border-bottom">{data.title}</h3>
                { data.blog &&
                        data.blog.map(section=>{
                            return (
                                <article className="blog-post" key={section._id}>
                                    <h2 className="blog-post-title mt-5">{section.name}</h2>
                                    <p className="blog-post-meta">{section.date}</p>
                                    <p>{section.para1}</p>
                                    <p>{section.para2}</p>
                                    <p>{section.para3}</p>

                                    <h2 className="mb-4 mt-4">{section.subheading1}</h2>
                                    <p>{section.subpara1}</p>
                                    <p>{section.subpara2}</p>
                                    <hr />
                                </article>
                            )
                        })
                }
           </div>
           <div className="col-md-4">
               <div className="postion-sticky" style={{top:'2rem'}}>
                    <div className="p-4 mb-3 mt-3 bg-light rounded">
                        <h4 className="fst-italic">About</h4>
                        <p className="mb-0">{data.about}</p>
                    </div>
                    <div className="p-4">
                        <h4 className="fst-italic">
                            Archieves
                        </h4>
                        <ol className="list-unstyled mb-0">
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                            <li><Link to="/blog">March 2021</Link></li>
                        </ol>
                    </div>
                    <div className="p-4">
                        <h4 className="fst-italic">
                            Elsewhere
                        </h4>
                        <ol className="list-unstyled mb-0">
                            <li><Link to="/blog">Github</Link></li>
                            <li><Link to="/blog">Facebook</Link></li>
                            <li><Link to="/blog">Twitter</Link></li>
                        </ol>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default BlogMain
