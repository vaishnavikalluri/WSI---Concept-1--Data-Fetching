import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Navigation directly in Home page */}
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link href="/about">About</Link> |{' '}
        <Link href="/dashboard">Dashboard</Link> |{' '}
        <Link href="/news">News</Link>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to My News App</h1>
        <p>Explore static, dynamic, and hybrid pages!</p>
      </header>
    </div>
  );
}
