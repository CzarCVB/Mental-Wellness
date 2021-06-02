import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Slide from 'react-reveal';


const CommPost = () => {
  const blogPosts = useSelector(state => state.post.posts)
    const blogEntry = blogPosts.map((post,i) =>{
        return (
       <Slide left duration={1300}>
        <div className="rowz education">
          <div className="three columns header-col">
            <h1>
              <span>Post {i+1}</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
              <div style = {{marginLeft: "-8rem", width: "70rem"}} key={post.authorName}>
            <h3>{post.postTitle}</h3>
            <p className="info">
              {post.authorName} <span>&bull;</span>
              <em className="date">{post.date}</em>
            </p>
            <p>{post.postContent}</p>
          </div></div>
            </div>
          </div>
        </div>
      </Slide>
          
        );
      });

    return (
        <Fragment>
        {blogEntry}
        </Fragment>
        
    )


}



export default CommPost;