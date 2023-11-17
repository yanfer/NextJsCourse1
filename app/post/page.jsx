import PostCard from '@/components/PostCard';

async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  /*   await new Promise((resolve) => setTimeout(resolve, 3000)); */

  return data;
}

//R S C = React Sever Component
//aqui se renderiza y para ponerle funciones hay que hacer un componente y traerlo de
async function Posts() {
  const posts = await loadPosts();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
