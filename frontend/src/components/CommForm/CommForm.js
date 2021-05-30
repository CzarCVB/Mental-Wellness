import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../../redux/post-slice";
import "./CommForm.css";
const CommForm = (props) => {
  const dispatch = useDispatch();

  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const dateInputRef = useRef();
  const contentInputRef = useRef();

const onSubmitHandler = (event) => {
  event.preventDefault()
  const newPost = {
    id: Math.floor(Math.random()*100),
    postTitle: titleInputRef.current.value,
    postContent: contentInputRef.current.value,
    authorName: authorInputRef.current.value,
    date: dateInputRef.current.value.toLocaleString("en-US", { day: "2-digit" , month: 'short'})
  }
  dispatch(postActions.addPost(newPost))
  titleInputRef.current.value = ""
  authorInputRef.current.value = ""
  dateInputRef.current.value = ""
  contentInputRef.current.value = ""
}

  return (
    <form onSubmit = {onSubmitHandler}>
      <div id="new-post__controls">
        <div id = "new-post__control">
          <label>Title</label>
          <input type="text" ref= {titleInputRef}/>
        </div>
        <div id = "new-post__control">
          <label>Author</label>
          <input type="text" ref= {authorInputRef}/>
        </div>
        <div id = "new-post__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            ref= {dateInputRef}
          />
        </div>
        <div id = "new-post__control">
          <label>Content</label>
          <textarea id = "textArea" cols = '115' ref= {contentInputRef}/>
        </div>
        <div id = "new-post__actions">
          <button type="Submit">Post Anonymously!</button>
        </div>
      </div>
    </form>
  );
};

export default CommForm;
