import React from 'react'
import {Link} from 'react-router-dom'
import {LinkData} from './LinkData'

import './BlogLinks.scss'

const BlogLinks = () => {
    return (
            <div className="links-section">
                <ul>
                    {
                        LinkData.map((section,index)=>(
                            <li key={index}>
                                <Link to={section.url}>
                                    {section.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>   
    )
}

export default BlogLinks
