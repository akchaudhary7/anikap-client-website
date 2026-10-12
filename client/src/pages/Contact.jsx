import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { QRCodeSVG } from "qrcode.react";
import Container from "../components/Container";
import { scooters } from "../assets/assets.js";
import { buildWhatsAppLink } from "../utils/whatsapp";
import PageSeo from "../components/PageSeo";

const GOOGLE_SHOP_URL =
  import.meta.env.VITE_GOOGLE_SHOP_URL ||
  "https://www.google.com/maps/search/?api=1&query=Anika+P+Enterprises+Kithuri+Basti";

function getTodayLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const inputClass =
  "mt-2 w-full rounded-[10px] border border-input bg-white px-[14px] py-3 text-sm text-ink outline-none placeholder:text-placeholder focus:border-ink";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    scooterId: "",
    date: "",
  });
  const [sending, setSending] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Test ride email is not configured yet.");
      return;
    }

    const selectedScooter = scooters.find(
      (scooter) => scooter._id === form.scooterId,
    );

    setSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: form.name,
          user_phone: form.phone,
          scooter_model: selectedScooter?.name || "Not selected",
          preferred_date: form.date,
        },
        { publicKey },
      );

      toast.success("Request sent! We’ll call you to confirm.");
      setForm({ name: "", phone: "", scooterId: "", date: "" });
    } catch {
      toast.error("Couldn’t send your request. Please try again or call us.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageSeo
        title="Contact and Test Rides"
        description="Contact Anika P Enterprises in Kithuri, Basti, or request an electric scooter test ride."
      />
      <Toaster position="top-center" />

      <section className="bg-white py-12 md:py-[72px]">
        <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact details and shop QR code */}
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-leaf">
              Contact us
            </p>

            <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Visit us or book a test ride
            </h1>

            <div className="mt-7 space-y-6 text-sm leading-[1.7]">
              <div>
                <p className="text-text-muted">Phone and WhatsApp</p>
                <a
                  href="tel:7355364697"
                  className="block text-2xl font-extrabold text-ink hover:underline"
                >
                  7355364697
                </a>
                <p className="text-text-muted">Prem Prakash Chaudhary</p>
              </div>

              <div>
                <p className="text-text-muted">Showroom</p>
                <p className="text-base text-ink">
                  Kithuri, Munderwa, Basti (U.P.)
                </p>
                <p className="text-base text-ink">Pin Code 272170</p>
              </div>

              <div>
                <p className="text-text-muted">Hours</p>
                <p className="text-base text-ink">[ADD SHOWROOM HOURS]</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:7355364697"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-[15px] font-extrabold text-ink hover:bg-gold-dark"
              >
                Call now
              </a>
              <a
                href={buildWhatsAppLink(
                  "Hello, I have a question about your scooters.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink px-7 text-[15px] font-extrabold text-ink hover:bg-mist"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-6 flex min-h-56 flex-col items-center justify-center gap-3 rounded-2xl bg-sand p-5 text-center sm:flex-row sm:text-left">
              <a
                href={GOOGLE_SHOP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Anika P Enterprises on Google"
                className="shrink-0 rounded-xl bg-white p-3"
              >
                <QRCodeSVG value={GOOGLE_SHOP_URL} size={140} />
              </a>
              <div>
                <p className="font-extrabold text-ink">Find us on Google</p>
                <p className="mt-1 text-sm text-text-muted">
                  Scan the QR code or tap it to open our shop listing.
                </p>
              </div>
            </div>
          </div>

          {/* Test ride request form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-white p-5 sm:p-8"
          >
            <h2 className="mb-6 text-2xl font-extrabold text-ink">
              Book a test ride
            </h2>

            <label
              className="block text-[13px] font-bold text-ink"
              htmlFor="name"
            >
              Your name
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name"
                className={inputClass}
                value={form.name}
                onChange={updateField}
                required
              />
            </label>

            <label
              className="mt-4 block text-[13px] font-bold text-ink"
              htmlFor="phone"
            >
              Phone number
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Mobile number"
                pattern="[+]?[0-9 ()-]{10,18}"
                title="Enter a valid phone number"
                className={inputClass}
                value={form.phone}
                onChange={updateField}
                required
              />
            </label>

            <label
              className="mt-4 block text-[13px] font-bold text-ink"
              htmlFor="scooterId"
            >
              Scooter model
              <select
                id="scooterId"
                name="scooterId"
                className={inputClass}
                value={form.scooterId}
                onChange={updateField}
                required
              >
                <option value="">Select a scooter</option>
                {scooters.map((scooter) => (
                  <option key={scooter._id} value={scooter._id}>
                    {scooter.name}
                  </option>
                ))}
              </select>
            </label>

            <label
              className="mt-4 block text-[13px] font-bold text-ink"
              htmlFor="date"
            >
              Preferred date
              <input
                id="date"
                name="date"
                type="date"
                min={getTodayLocalDate()}
                className={inputClass}
                value={form.date}
                onChange={updateField}
                required
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 text-[15px] font-extrabold text-ink transition-colors hover:bg-gold-dark disabled:cursor-wait disabled:opacity-60"
            >
              {sending ? "Sending request…" : "Request test ride"}
            </button>

            <p className="mt-3 text-center text-sm text-text-muted">
              We will call you to confirm.
            </p>
          </form>
        </Container>
      </section>
    </>
  );
}
