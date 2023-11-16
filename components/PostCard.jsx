'use client';

//R C C = React Client Component
function PostCard({ post }) {
  return (
    <div key={post.id}>
      <h3>
        {post.id}.{post.title}
      </h3>
      <p>{post.body}</p>
      <button
        onClick={() => {
          alert('click funcionando');
        }}
      >
        click
      </button>
    </div>
  );
}

export default PostCard;
