export default function LocalBusinessSchema() {
  const business = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Anika P Enterprises",
    telephone: "+91-7355364697",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kithuri, Munderwa",
      addressLocality: "Basti",
      addressRegion: "Uttar Pradesh",
      postalCode: "272170",
      addressCountry: "IN",
    },
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(business)}
    </script>
  );
}