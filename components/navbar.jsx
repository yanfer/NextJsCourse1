import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <h1>NavBar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/post">Post</Link>
        </li>
      </ul>
    </nav>
  );
}
