import Container from "../components/Container";
import { assets } from "../assets/assets.js";
import PageSeo from "../components/PageSeo";

const services = [
  ["Dealership & Distribution", "We offer dealership & distribution in UP"],
  ["Electric scooty/E-Rikshaw/Loader", "All new models"],
  ["Genuine spare parts", "We sell for every model"],
  ["Service and maintenance", "Keep your scooter running well"],
  ["Battery and charger", "Lead acid and lithium options"],
  ["EV charging solution", "Charging help for your home"],
];

export default function About() {
  const emailAddress = "info@anikapenterprises.in";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <>
      <PageSeo
        title="About Anika P Enterprises"
        description="Learn about Anika P Enterprises, an electric scooter dealership in Kithuri, Basti."
      />
      {/* Dark intro */}
      <section className="bg-night py-14 text-white md:py-[72px]">
        <Container>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
            About us
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[52px]">
            Ride Green. Save Future.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-[1.6] text-text-subtle sm:text-lg">
            Anika P Enterprises is an electric scooty dealership & distributer
            in Basti (U.P.), bringing Har Ghar Scooty to all families.
          </p>
        </Container>
      </section>

      {/* Story */}
      <section className="py-12 md:py-[72px]">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="grid aspect-[5/3] place-items-center overflow-hidden rounded-3xl bg-sand text-sm text-placeholder">
            {assets.showroom ? (
              <img
                src={assets.showroom}
                alt="Anika P Enterprises showroom"
                className="h-full w-full object-contain"
              />
            ) : (
              "Add a showroom photo"
            )}
          </div>

          <div>
            <h2 className="text-[30px] font-extrabold text-ink md:text-[34px]">
              Our story
            </h2>

            <p className="block mt-4 text-base leading-[1.6] text-text-secondary">
              Anika P Enterprises was founded with a vision to drive the future
              of mobility in Uttar Pradesh. Based in Basti, we are an authorized
              dealer of advanced electric two-wheelers. We started with a simple
              belief - India deserves affordable, eco-friendly, and powerful
              transportation. With rising fuel costs and pollution, we wanted to
              bring a change in our own district first. Today, we are not just
              selling electric scooters, we are building a complete EV ecosystem
              with sales, service, and dealership opportunities for young
              entrepreneurs across UP. 
              </p>
              <p className="inline font-bold">Our Mission:</p> To make every ride green,
              affordable, and reliable.
            

            <p className="mt-5 font-extrabold text-ink">
              Prem Prakash Chaudhary
            </p>
            <p className="mt-1 text-sm text-text-muted">MD, Chief Director</p>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-text-muted transition hover:text-black hover:underline"
            >
              {emailAddress}
            </a>

            <p className="mt-1 text-sm text-text-muted">
              <a
                className="hover:text-black hover:underline"
                href="tel:7355364697"
              >
                7355364697
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-mist py-12 md:py-[72px]">
        <Container>
          <h2 className="mb-7 text-[30px] font-extrabold text-ink md:text-[34px]">
            What we offer
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, description]) => (
              <article
                key={title}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <h3 className="text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-text-muted">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
