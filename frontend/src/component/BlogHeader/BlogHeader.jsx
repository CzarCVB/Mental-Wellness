import React from 'react'
import {Link } from 'react-router-dom'

import './BlogHeader.scss'
const BlogHeader = () => {
    return (
            <div className="Blog-header">
                <div className="main-heading">
                    <h1>Blogs</h1>
                </div>
                <div>
                    <Link to="/register">
                        <button type="button" className="btn btn-outline-dark">SignUp</button>
                    </Link>
                </div>
            </div>
    )
}

export default BlogHeader
