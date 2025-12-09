export const dynamic = 'force-dynamic'; // dynamic page
export default async function Dashboard() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { cache: 'no-store' });
  const data = await res.json();
  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>This page is built on every request.</p>
    </div>
  );
}