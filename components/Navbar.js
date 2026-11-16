import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="logo">
        <span className="marca">🌊</span>
        <span>
          <h1>TERRAMAR</h1>
          <span>Carlos Matínez Sánchez</span>
        </span>
      </Link>

      <button className="nav-burger" aria-label="Abrir menú">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="nav-enlaces">
        <Link href="/">Catálogo</Link>
        <Link href="/vendedor">Información del vendedor</Link>
      </nav>
    </header>
  );
}
