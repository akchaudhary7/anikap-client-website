import { assets } from "../assets/assets";
import Container from "../components/Container";
import ScooterCard from "../components/ScooterCard";
// import scooters from "../data/scooters.json";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { scooters } from "../assets/assets";
import PageSeo from "../components/PageSeo";
import { Link } from "react-router-dom";

const benefits = [
  ["Up to 2 years", "Motor warranty"],
  ["Easy EMI", "Bajaj Finance & Aakasha Finance"],
  ["Genuine Spare Parts", "Plus battery and charger"],
  ["Service", "Maintenance and EV charging"],
];

const reviews = [
  [
    "“I use my scooter for daily trips around town, and it’s been convenient and easy to ride. The team was helpful from the first visit to delivery.”",
    "Amit Chaudhary, Basti",
  ],
  [
    "“Showroom par options dekhne aur test ride lene ka experience kaafi achha tha. EMI ke baare mein bhi clearly samjhaya, toh decision lena easy ho gaya.”",
    "Ayush Sharma, Munderwa",
  ],
  [
    "“Scooter lene ke baad roz ke kaam kaafi aasaan ho gaye hain. Service ke liye gaya toh team ne jaldi se check karke problem solve kar di.”",
    "Abhishek Kumar Verma, Gayghat",
  ],
];

export default function Home() {
  const featuredScooter = scooters[2] ?? scooters[0];
  const popularScooters = scooters.slice(0, 3);
  // console.log(scooters);

  return (
    <>
      <PageSeo
        title="Electric Scooters in Basti"
        description="Explore electric scooters at Anika P Enterprises in Kithuri, Basti. View models, prices, and book a test ride."
      />
      {/* Hero */}
      <section className="bg-mist py-12 md:py-18">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-leaf">
              New electric scooters · India
            </p>

            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-[60px]">
              Ride Green.
              <br />
              Save Future.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-[1.6] text-text-secondary">
              Har Ghar Scooty. Brand-new electric scooters from Rs 49,500, with
              up to 2 years motor warranty and easy EMI through Bajaj Finance &
              Aakasha Finance.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact#test-ride-form"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold bg-gold px-6 text-sm font-bold text-ink transition hover:bg-gold-dark"
              >
                Book a test ride
              </Link>

              <a
                href={buildWhatsAppLink(
                  "Hello, I would like to know more about your electric scooters.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-text-secondary px-6 text-sm font-bold text-ink transition hover:bg-white"
              >
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            {featuredScooter?.image && (
              <img
                src={assets.logo}
                alt={featuredScooter.name}
                className="h-80 w-full rounded-3xl object-cover sm:h-105 lg:h-125"
              />
            )}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-8 md:py-10">
        <Container className="grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4">
          {benefits.map(([title, description]) => (
            <div key={title}>
              <h2 className="font-bold text-ink">{title}</h2>
              <p className="mt-1 text-sm text-text-muted">{description}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Popular models */}
      <section className="py-8 md:py-12">
        <Container>
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-ink">
              Popular models
            </h2>
            <a
              href="/scooters"
              className="shrink-0 text-sm font-bold text-leaf hover:underline"
            >
              See all scooters →
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularScooters.slice(0, 3).map((scooter) => (
              <ScooterCard key={scooter._id} scooter={scooter} />
            ))}
          </div>
        </Container>
      </section>

      {/* Rider reviews */}
      <section className="mt-8 bg-mist py-14 md:mt-12 md:py-16">
        <Container>
          <h2 className="mb-7 text-[32px] font-extrabold leading-tight tracking-tight text-ink md:text-[36px]">
            What our riders say
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map(([quote, name]) => (
              <figure
                key={name}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <blockquote className="text-text-secondary">{quote}</blockquote>
                <figcaption className="mt-4 text-sm text-text-muted">
                  {name}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Dealership and distribution CTA */}
      <section className="bg-night py-16 text-center text-white md:py-20">
        <Container>
          <h2 className="text-3xl font-bold md:text-4xl">
            Dealership and Distribution
          </h2>

          <p className="mt-4 text-white/70">
            Interested in partnering with us? Contact us for more details.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:7355364697"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold bg-gold px-6 text-sm font-bold text-ink transition hover:bg-gold-dark"
            >
              Call us
            </a>

            <a
              href={buildWhatsAppLink(
                "Hello, I would like to know more about dealership and distribution opportunities.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/50 px-6 text-sm font-bold text-white transition hover:bg-white/10"
            >
              WhatsApp us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
