import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

export default function ScooterCard({ scooter }) {
  const type = scooter.type ?? scooter.category ?? "";
  const specLine =
    scooter.specs ??
    [scooter.voltage, scooter.power, scooter.tyre ?? scooter.model]
      .filter(Boolean)
      .join(" · ");

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-white">
      <Link
        to={`/scooters/${scooter._id}`}
        aria-label={`View ${scooter.name} details`}
        className="block"
      >
        <img
          src={scooter.image[0]}
          alt={scooter.name}
          className="aspect-[2.13/1] w-full object-cover"
        />
      </Link>

      <div className="px-4.5 pb-5 pt-5">
        <Link
          to={`/scooters/${scooter._id}`}
          aria-label={`View ${scooter.name} details`}
          className="block"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold-dark">
            {type}
          </p>

          <h3 className="mt-2 text-[17px] font-extrabold leading-snug text-ink">
            {scooter.name}
          </h3>

          <p className="mt-1 text-sm leading-5 text-text-muted">{specLine}</p>

          <p className="mt-2 text-[19px] font-extrabold text-ink">
            {formatPrice(scooter.price)}
          </p>
        </Link>
        <Link
          to={`/scooters/${scooter._id}`}
          className="mt-3 inline-block text-sm font-extrabold text-leaf hover:underline"
        >
          View details →
        </Link>
      </div>
    </article>
  );
}
