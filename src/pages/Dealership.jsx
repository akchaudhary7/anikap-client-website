import Container from "../components/Container";
import PageSeo from "../components/PageSeo";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { assets } from "../assets/assets";

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

const featuredMilestones = [
  {
    months: "6 months",
    quantity: "250 scooters",
    gift: "Splendor bike",
    image: assets.splender,
    imageAlt: "Splendor bike milestone gift",
    imageSize: "h-36 sm:h-40",
    accent: "border-gold/30",
  },
  {
    months: "12 months",
    quantity: "500 scooters",
    gift: "Apache RTR 160",
    image: assets.rtr160,
    imageAlt: "Apache RTR 160 milestone gift",
    imageSize: "h-44 sm:h-48",
    accent: "border-gold/40",
  },
  {
    months: "18 months",
    quantity: "750 scooters",
    gift: "Royal Enfield Classic 350",
    image: assets.classic350,
    imageAlt: "Royal Enfield Classic 350 milestone gift",
    imageSize: "h-52 sm:h-56",
    accent: "border-gold/60",
  },
  {
    months: "24 months",
    quantity: "1200 scooters",
    gift: "Alto K10",
    image: assets.alto,
    imageAlt: "Alto K10 milestone gift",
    imageSize: "h-60 sm:h-64",
    accent: "border-gold",
  },
];

const additionalOffers = [
  {
    title: "First order rewards",
    detail: "Choose the reward based on your first-order quantity.",
    rewards: [
      {
        quantity: "16 scooters",
        gift: "Bajaj mixer grinder",
        image: assets.bajajmixer,
      },
      {
        quantity: "32 scooters",
        gift: "Crompton cooler",
        image: assets.cooler,
      },
      {
        quantity: "50 scooters",
        gift: "One scooter",
        image: assets.alfabldc1,
      },
    ],
  },
  {
    title: "3-month order milestone",
    detail: "Place a total order of 110 scooters within 3 months.",
    rewards: [
      {
        quantity: "110 scooters",
        gift: "1.5-ton, 5-star AC",
        image: assets.ac,
      },
    ],
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
              Rewards for growing your business
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Start with first-order gifts, then work toward larger order
              milestones. Contact us to confirm current offer availability and
              terms.
            </p>
          </header>

          {/* First-order and 3-month offers */}
          <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
            {additionalOffers.map((offer, offerIndex) => (
              <article
                key={offer.title}
                className="rounded-2xl border border-line bg-white p-5 sm:p-6"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-gold-dark">
                  {offerIndex === 0 ? "First order" : "Sales milestone"}
                </p>
                <h3 className="mt-2 text-xl font-extrabold text-ink">
                  {offer.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {offer.detail}
                </p>

                <div
                  className={`mt-5 grid gap-3 ${
                    offer.rewards.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {offer.rewards.map((reward) => (
                    <div
                      key={reward.gift}
                      className={`flex items-center gap-4 rounded-xl border border-line bg-mist p-3 ${
                        offer.rewards.length === 1 ? "sm:p-5" : ""
                      } ${
                        reward.gift.toLowerCase().includes("scooter")
                          ? "w-full sm:col-span-2"
                          : ""
                      }`}
                    >
                      <div
                        className={`grid shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-2 ${
                          offer.rewards.length === 1
                            ? "h-28 w-32 sm:h-36 sm:w-40"
                            : reward.gift.toLowerCase().includes("scooter")
                              ? "h-28 w-36 sm:h-36 sm:w-48"
                              : "h-20 w-24"
                        }`}
                      >
                        <img
                          src={reward.image}
                          alt={reward.gift}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-leaf">
                          {reward.quantity}
                        </p>
                        <p className="mt-1 font-extrabold leading-snug text-ink">
                          {reward.gift}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Larger milestone gifts */}
          <div className="mt-14">
            <header className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold-dark">
                Milestone rewards
              </p>
              <h3 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
                Bigger milestones. Bigger rewards.
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                Reach each total-order target within its stated period to
                qualify.
              </p>
            </header>

            <div className="mt-7 grid items-end gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {featuredMilestones.map((offer, index) => (
                <article
                  key={offer.gift}
                  className={`relative overflow-hidden rounded-2xl border-2 ${offer.accent} bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index === featuredMilestones.length - 1
                      ? "xl:-translate-y-3 xl:shadow-lg"
                      : ""
                  }`}
                >
                  <span className="absolute right-6 top-6 z-10 rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-ink">
                    {offer.months}
                  </span>

                  <div
                    className={`grid ${offer.imageSize} place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-mist via-white to-[#F3E6B8] p-3`}
                  >
                    <img
                      src={offer.image}
                      alt={offer.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain drop-shadow-xl"
                    />
                  </div>

                  <div className="px-1 pb-2 pt-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-gold-dark">
                      {offer.quantity} total order
                    </p>
                    <h4 className="mt-2 text-lg font-extrabold leading-snug text-ink">
                      {offer.gift}
                    </h4>
                    <p className="mt-2 text-sm text-text-muted">
                      Reach the milestone within {offer.months}.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="mt-10 rounded-2xl border border-line bg-white p-5 sm:p-6">
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
              <h3 className="text-2xl font-extrabold">
                Ready to become a partner?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Contact us to discuss the dealership and current offers.
              </p>
            </div>

            <ContactButtons dark />
          </div>
        </Container>
      </section>
    </>
  );
}
