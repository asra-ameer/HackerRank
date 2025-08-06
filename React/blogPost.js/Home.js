import React, { useState } from "react";

function Home() {
 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCreatePost = () => {
    if (title.trim() === "" || description.trim() === "") return;
    setPosts([...posts, { title, description, id: Date.now() }]);
    setTitle("");
    setDescription("");
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          data-testid="title-input"
          onChange={(e) => setTitle(e.target.value)}
          className="w-100"
        />
        <textarea
          placeholder="Enter Description"
          value={description}
          data-testid="description-input"
          onChange={(e) => setDescription(e.target.value)}
          className="mt-10 w-100"
        />
        <button
          data-testid="create-button"
          className="mt-10"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </div>

      <div data-testid="posts-container" className="flex wrap gap-10">
        {posts.map(post => (
          <div key={post.id} className="post-box">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;