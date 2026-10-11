import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { assets } from "../assets/assets";

const links = [
  { label: "Home", to: "/" },
  { label: "Scooters", to: "/scooters" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function linkClass({ isActive }) {
    return `block py-3 text-sm transition-colors hover:text-gold ${
      isActive ? "text-gold" : "text-white"
    }`;
  }

  return (
    <header className="relative z-50 bg-night text-white">
      <Container className="flex min-h-20 items-center justify-between gap-3">
        <NavLink
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          {/* Replace with your logo image if available. */}
          <span className="grid size-10 shrink-0 place-items-center rounded bg-black font-bold text-gold">
            <img src={assets.logo} alt="logo" />
          </span>
          <span className="truncate text-xs font-bold sm:text-sm">
            ANIKA P ENTERPRISES
          </span>
        </NavLink>

        <nav className="hidden font-semibold items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="tel:7355364697"
            className="rounded-full bg-gold px-3 py-2 text-xs font-bold text-ink sm:px-5 sm:py-3 sm:text-sm"
          >
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">Call 7355364697</span>
          </a>

          <button
            type="button"
            className="grid size-10 place-items-center rounded border border-white/30 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          className="absolute left-0 top-full w-full border-t border-white/10 bg-night px-5 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}