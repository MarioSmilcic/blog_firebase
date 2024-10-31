import "./createPost.styles.css";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const createPostHandler = (e) => {
    e.preventDefault();

    const newPost = { id: Math.random(), title: title, post: post };
    setPost(...post, newPost);
    setTitle("");
    setPost("");
    console.log(newPost);
  };

  return (
    <div className="createPost">
      <h2>Create Post</h2>
      <form onSubmit={createPostHandler} className="createPost-form">
        <div className="createPost-input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="createPost-input">
          <label htmlFor="post">Post:</label>
          <textarea
            className="createPost-area"
            name="text"
            id="post"
            onChange={(e) => setPost(e.target.value)}
            value={post}
          ></textarea>
        </div>
        <button>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
