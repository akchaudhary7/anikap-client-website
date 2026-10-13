import Container from "../components/Container";
import PageSeo from "../components/PageSeo";
import { buildWhatsAppLink } from "../utils/whatsapp";

const benefits = [
  {
    title: "Vehicle categories",
    description:
      "Dealership and distributorship opportunities for electric scooters, e-rickshaws, and loaders.",
  },
  {
    title: "Showroom support",
    description:
      "Showroom room rent support provided by the company, subject to applicable terms.",
  },
  {
    title: "Branding support",
    description: "Company provides boards and banners for your showroom.",
  },
  {
    title: "Transportation support",
    description:
      "Transportation fee support provided by the company, subject to applicable terms.",
  },
  {
    title: "Customer care for retail customers and dealers",
    description: "Call 7355364697 for assistance.",
  },
  {
    title: "Engineer assistance",
    description:
      "Engineer support for repairs, technical questions, and problem solving.",
  },
  {
    title: "24/7 customer care",
    description: "Round-the-clock customer care support.",
  },
];

const offers = [
  {
    title: "First order rewards",
    detail: "Gifts based on the quantity in your first order.",
    rewards: [
      { quantity: "16 scooters", reward: "Bajaj mixer grinder", image: null },
      { quantity: "32 scooters", reward: "Crompton cooler", image: null },
      { quantity: "40 scooters", reward: "One scooter", image: null },
    ],
  },
  {
    title: "3-month milestone",
    detail: "Reach a total order of 110 scooters within 3 months.",
    rewards: [
      { quantity: "110 scooters", reward: "1.5-ton, 5-star AC", image: null },
    ],
  },
  {
    title: "6-month milestone",
    detail: "Reach a total order of 250 scooters within 6 months.",
    rewards: [{ quantity: "250 scooters", reward: "Splendor bike", image: null }],
  },
  {
    title: "8-month milestone",
    detail: "Reach a total order of 400 scooters within 8 months.",
    rewards: [{ quantity: "400 scooters", reward: "Apache RTR 160", image: null }],
  },
  {
    title: "10-month milestone",
    detail: "Reach a total order of 700 scooters within 10 months.",
    rewards: [
      {
        quantity: "700 scooters",
        reward: "Royal Enfield Classic 350",
        image: null,
      },
    ],
  },
  {
    title: "14-month milestone",
    detail: "Reach a total order of 1,000 scooters within 14 months.",
    rewards: [{ quantity: "1,000 scooters", reward: "Alto K10", image: null }],
  },
];

const whatsappHref = buildWhatsAppLink(
  "Hello, I am interested in dealership and distributorship opportunities. Please share more details.",
);

function ContactButtons({ dark = false }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="tel:7355364697"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-[15px] font-extrabold text-ink transition hover:bg-gold-dark"
      >
        Call us
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-[15px] font-extrabold transition ${
          dark
            ? "border-white/50 text-white hover:bg-white/10"
            : "border-ink text-ink hover:bg-mist"
        }`}
      >
        WhatsApp us
      </a>
    </div>
  );
}

function RewardItem({ quantity, reward, image }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-line p-3">
      <div className="grid h-20 w-24 shrink-0 place-items-center overflow-hidden rounded-lg bg-sand px-2 text-center text-xs text-text-muted">
        {image ? (
          <img
            src={image}
            alt={reward}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          "Product image coming soon"
        )}
      </div>

      <div>
        <p className="text-sm text-text-muted">{quantity}</p>
        <p className="mt-1 font-extrabold text-ink">{reward}</p>
      </div>
    </div>
  );
}

export default function Dealership() {
  return (
    <>
      <PageSeo
        title="Dealership and Distributorship"
        description="Explore electric scooter, e-rickshaw, and loader dealership opportunities with Anika P Enterprises."
      />

      <section className="bg-white py-12 md:py-[72px]">
        <Container>
          <header className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf">
              Partner with us
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Dealership and distributorship opportunities
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Grow your business with electric mobility products and practical
              support from Anika P Enterprises.
            </p>
            <div className="mt-6">
              <ContactButtons />
            </div>
          </header>

          <div className="mt-10 rounded-3xl bg-mist p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
              What the partnership includes
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
              Dealership and distributorship opportunities are available for
              electric scooters, e-rickshaws, and loaders.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-line bg-white p-5"
                >
                  <h3 className="font-extrabold text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-mist py-12 md:py-[72px]">
        <Container>
          <header className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf">
              Partner offers
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Rewards for your business growth
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Offers may be temporary or ongoing. Contact our team to confirm
              current availability and terms.
            </p>
          </header>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="rounded-2xl border border-line bg-white p-5 sm:p-6"
              >
                <h3 className="text-lg font-extrabold text-ink">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {offer.detail}
                </p>
                <div className="mt-4 grid gap-3">
                  {offer.rewards.map((item) => (
                    <RewardItem key={item.reward} {...item} />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-8 rounded-2xl border border-line bg-white p-5 sm:p-6">
            <h3 className="font-extrabold text-ink">Terms and conditions</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Offers may be temporary or ongoing and are subject to confirmation
              by the company. Qualifying order quantities, periods, eligibility,
              product availability, delivery, and other conditions must be
              confirmed with the dealership team before participation. Ask us
              for the current written terms.
            </p>
          </aside>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-night p-6 text-white sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-2xl font-extrabold">
                Interested in becoming a partner?
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Contact us to discuss dealership, distributorship, and current
                offers.
              </p>
            </div>
            <ContactButtons dark />
          </div>
        </Container>
      </section>
    </>
  );
}