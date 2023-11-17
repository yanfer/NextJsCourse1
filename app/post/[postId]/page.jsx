//En el momento que creamos un componente, este obitene props
//dentro tiene un parametro especial llamado params

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);
  return (
    <div>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>

      <h3>Otras publicaciones</h3>
    </div>
  );
}

export default Page;
