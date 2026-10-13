import Container from "./Container";

export default function Footer() {
  const emailAddress = "info@anikapenterprises.in";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <footer className="border-t border-white/20 bg-night text-text-subtle">
      <Container className="grid gap-8 py-10 text-sm leading-[1.7] md:grid-cols-2 md:items-center md:py-14">
        <div>
          <p className="font-extrabold text-white">ANIKA P ENTERPRISES</p>
          <p>EV Scooty · Spare Parts · Service · Finance</p>
          <p>Munderwa, Basti (U.P.) – 272170</p>
        </div>

        <div className="md:text-right">
          <p>Prem Prakash Chaudhary (MD)</p>

          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-text-subtle transition hover:text-white hover:underline"
          >
            {emailAddress}
          </a>

          <a className="block hover:text-white" href="tel:7355364697">
            7355364697
          </a>

          <p>Provide Dealership &amp; Distribution</p>
        </div>
      </Container>
    </footer>
  );
}
