import React from 'react'
import { assets } from './assets/assets';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import scooters from "./data/scooters.json";
import { formatPrice } from "./utils/formatPrice";
import ScooterDetails from "./pages/ScooterDetails";


function ScooterDetails() {
  const { id } = useParams();
  const scooter = scooters.find((item) => String(item.id) === id);

  if (!scooter) {
    return <p className="p-8">Scooter not found.</p>;
  }

  return (
    <section className="mx-auto max-w-3xl px-5 py-12 md:px-16">
      <h1 className="text-3xl font-bold text-ink">{scooter.name}</h1>
      <p className="mt-3 text-text-secondary">{scooter.type}</p>
      <p className="mt-4 text-xl font-bold">{formatPrice(scooter.price)}</p>
    </section>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/scooters" element={<Home />} />
        <Route path="/scooters/:id" element={<ScooterDetails />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}