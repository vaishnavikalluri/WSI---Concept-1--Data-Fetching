export const revalidate = 60; // rebuild page every 60 seconds
export default async function News() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });
  const posts = await res.json();
  return (
    <div>
      <h1>News</h1>
      <ul>
        {posts.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <p>This page updates every 60 seconds automatically.</p>
    </div>
  );
}
