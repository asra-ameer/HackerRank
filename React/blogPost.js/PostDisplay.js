function PostDisplay() {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      <div className="post-box">
        <h3>{"Title"}</h3>
        <p>{"Description"}</p>
        <button >Delete</button>
      </div>
    </div>
  );
}

export default PostDisplay;