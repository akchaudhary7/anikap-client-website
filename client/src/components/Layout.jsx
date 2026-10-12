import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import site from "../data/site.json";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar phone={site.phone} />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer
        address={site.address}
        phone={site.phone}
        financeLine={site.financeLine}
      />
    </>
  );
}