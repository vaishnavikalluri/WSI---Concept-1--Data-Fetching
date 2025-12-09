export const revalidate = false; // static, built once
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This page is statically generated at build time.</p>
    </div>
  );
}