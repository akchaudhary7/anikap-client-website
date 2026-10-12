import { Link } from "react-router-dom";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <main className="grid min-h-[60vh] place-items-center bg-mist py-16">
      <Container className="text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf">
          Page not found
        </p>

        <h1 className="mt-4 text-7xl font-extrabold leading-none text-ink sm:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-extrabold text-ink sm:text-3xl">
          We couldn’t find that page.
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-text-muted">
          The link may be incorrect, or the page may have moved. Head back and
          find the scooter you’re looking for.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-[15px] font-extrabold text-ink transition-colors hover:bg-gold-dark"
          >
            Go to home
          </Link>

          <Link
            to="/scooters"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink px-7 text-[15px] font-extrabold text-ink transition-colors hover:bg-white"
          >
            Browse scooters
          </Link>
        </div>
      </Container>
    </main>
  );
}