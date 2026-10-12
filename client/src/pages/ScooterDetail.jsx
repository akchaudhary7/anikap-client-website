import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import { scooters } from "../assets/assets.js";
import { formatPrice } from "../utils/formatPrice";
import { buildWhatsAppLink } from "../utils/whatsapp";
import PageSeo from "../components/PageSeo";

export default function ScooterDetail() {
  const { id } = useParams();
  const scooter = scooters.find((item) => item._id === id);

  const images = Array.isArray(scooter?.image)
    ? scooter.image
    : scooter?.image
      ? [scooter.image]
      : [];

  const media = [
    ...images.map((src, index) => ({
      key: `image-${index}`,
      type: "image",
      src,
    })),
    ...(scooter?.video
      ? [{ key: "video", type: "video", src: scooter.video }]
      : []),
  ];

  const [selectedKey, setSelectedKey] = useState(null);
  const selectedMedia =
    media.find((item) => item.key === selectedKey) ?? media[0];

  if (!scooter) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-extrabold text-ink">Scooter not found</h1>
        <Link
          to="/scooters"
          className="mt-4 inline-block font-semibold text-leaf"
        >
          ← Back to all scooters
        </Link>
      </Container>
    );
  }

  const whatsappHref = buildWhatsAppLink(
    `Hello, I am interested in the ${scooter.name}. Please share more details.`,
  );

  return (
    <>
      <PageSeo
        title="All Electric Scooters"
        description="Compare electric scooter models and prices at Anika P Enterprises in Basti."
      />
      <section className="bg-white py-8 md:py-[72px]">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-muted">
            <Link to="/" className="hover:text-ink">
              Home
            </Link>
            <span> / </span>
            <Link to="/scooters" className="hover:text-ink">
              All scooters
            </Link>
            <span> / </span>
            <span className="font-semibold text-ink">{scooter.name}</span>
          </nav>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            {/* Image and video gallery */}
            <div className="min-w-0">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-sand">
                {selectedMedia?.type === "video" ? (
                  <video
                    key={selectedMedia.src}
                    src={selectedMedia.src}
                    poster={images[0]}
                    controls
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : selectedMedia ? (
                  <img
                    src={selectedMedia.src}
                    alt={scooter.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="grid h-full place-items-center text-text-muted">
                    No scooter media available
                  </div>
                )}
              </div>

              {media.length > 1 && (
                <div
                  className="mt-4 flex gap-3 overflow-x-auto pb-2"
                  aria-label="Scooter photos and video"
                >
                  {media.map((item, index) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setSelectedKey(item.key)}
                      aria-label={
                        item.type === "video"
                          ? "Play scooter video"
                          : `Show scooter photo ${index + 1}`
                      }
                      aria-pressed={
                        (selectedMedia?.key ?? media[0]?.key) === item.key
                      }
                      className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 ${
                        (selectedMedia?.key ?? media[0]?.key) === item.key
                          ? "border-gold"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={item.type === "video" ? images[0] : item.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      {item.type === "video" && (
                        <span className="absolute inset-0 grid place-items-center bg-black/40 text-sm font-bold text-white">
                          ▶ Video
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Scooter details */}
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf">
                {scooter.label ?? `${scooter.type} · ELECTRIC SCOOTER`}
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                {scooter.name}
              </h1>

              <p className="mt-4 text-[32px] font-extrabold text-ink">
                {formatPrice(scooter.price)}
              </p>

              {scooter.specifications && (
                <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {Object.entries(scooter.specifications).map(
                    ([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-line p-4"
                      >
                        <dt className="text-sm text-text-muted">{label}</dt>
                        <dd className="mt-1 font-semibold text-ink">{value}</dd>
                      </div>
                    ),
                  )}
                </dl>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppLink(
                    `Hello, I would like to book a test ride for the ${scooter.name}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-[15px] font-extrabold text-ink hover:bg-gold-dark"
                >
                  Book a test ride
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink px-6 text-[15px] font-extrabold text-ink hover:bg-mist"
                >
                  WhatsApp us
                </a>

                <a
                  href="tel:7355364697"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink px-6 text-[15px] font-extrabold text-ink hover:bg-mist"
                >
                  Call
                </a>
              </div>

              {scooter.finance && (
                <div className="mt-5 rounded-2xl border border-line bg-mist p-5">
                  <h2 className="font-extrabold text-ink">
                    {scooter.finance.title}
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    {scooter.finance.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Features and warranty */}
      <section className="bg-mist py-12 md:py-[72px]">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {scooter.features?.length > 0 && (
            <div>
              <h2 className="mb-6 text-[30px] font-extrabold text-ink">
                Features
              </h2>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {scooter.features.map((feature) => (
                  <li key={feature} className="text-[15px] text-text-secondary">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {scooter.warranty?.length > 0 && (
            <div>
              <h2 className="mb-6 text-[30px] font-extrabold text-ink">
                Warranty
              </h2>
              <dl className="rounded-2xl border border-line bg-white p-5">
                {scooter.warranty.map(({ type, duration }) => (
                  <div
                    key={type}
                    className="flex justify-between gap-4 py-2 text-[15px]"
                  >
                    <dt className="text-text-secondary">{type}</dt>
                    <dd className="font-semibold text-ink">{duration}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
