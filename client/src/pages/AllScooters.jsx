import { useState } from "react";
import Container from "../components/Container";
import ScooterCard from "../components/ScooterCard";
import { scooters } from "../assets/assets.js";
import PageSeo from "../components/PageSeo";

const filters = ["All", "MID Drive", "BLDC"];

export default function AllScooters() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleScooters = scooters
  .filter((scooter) => {
    if (activeFilter === "All") return true;

    const types = Array.isArray(scooter.type)
      ? scooter.type
      : [scooter.type];

    return types.some(
      (type) => type?.toLowerCase() === activeFilter.toLowerCase()
    );
  })
  .sort((a, b) => Number(a.price) - Number(b.price));

  return (
    <>
      <PageSeo
        title="All Electric Scooters"
        description="Compare electric scooter models and prices at Anika P Enterprises in Basti."
      />
      <section className="bg-white py-12 md:py-[72px]">
        <Container>
          <header className="mb-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf">
              All scooters
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Find your electric scooter
            </h1>

            <p className="mt-3 text-base text-text-muted">
              All models. All prices in Rs. Easy EMI available
              with Bajaj Finance & Aakasha Finance.
            </p>

            <div
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Filter scooters"
            >
              {filters.map((filter) => {
                const selected = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveFilter(filter)}
                    className={`min-h-12 rounded-full border px-6 text-sm font-extrabold transition-colors ${
                      selected
                        ? "border-night bg-night text-white"
                        : "border-ink bg-white text-ink hover:bg-mist"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </header>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleScooters.map((scooter) => (
              <ScooterCard key={scooter._id} scooter={scooter} />
            ))}

            <aside className="flex min-h-[350px] flex-col justify-center rounded-2xl bg-night p-7 text-white">
              <h2 className="text-xl font-extrabold">Not sure which one?</h2>
              <p className="mt-4 text-sm leading-relaxed text-text-subtle">
                Talk to us and we will help you pick.
              </p>
              <a
                href="tel:7355364697"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-[15px] font-extrabold text-ink transition-colors hover:bg-gold-dark"
              >
                Call now
              </a>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
