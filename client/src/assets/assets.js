import logo from "./logo.png";
import alfadrl from "./alfadrl.jpeg";
import bimmer1 from "./bimmer1.jpeg";
import bimmer2 from "./bimmer2.jpeg";
import bimmer3 from "./bimmer3.jpeg";
import bimmer4 from "./bimmer4.jpeg";
import bimmerVideo from "./bimmerVideo.mp4";
import eyelight1 from "./eyelight1.jpeg";
import eyelight2 from "./eyelight2.jpeg";
import eyelight3 from "./eyelight3.jpeg";
import eyelight4 from "./eyelight4.jpeg";
import eyelightVideo from "./eyelightVideo.mp4";
import nuzzledrl1 from "./nuzzledrl1.jpeg";
import nuzzledrl2 from "./nuzzledrl2.jpeg";
import plenzer1 from "./plenzer1.jpeg";
import plenzer2 from "./plenzer2.jpeg";
import plenzer3 from "./plenzer3.jpeg";
import plenzer4 from "./plenzer4.jpeg";
import plenzer5 from "./plenzer5.jpeg";
import starbooster from "./starbooster.jpeg";
import showroom from './showroom.jpeg';

export const assets = {
  logo,
  alfadrl,
  bimmer1,
  bimmer2,
  bimmer3,
  bimmer4,
  bimmerVideo,
  eyelight1,
  eyelight2,
  eyelight3,
  eyelight4,
  eyelightVideo,
  nuzzledrl1,
  nuzzledrl2,
  plenzer1,
  plenzer2,
  plenzer3,
  plenzer4,
  plenzer5,
  starbooster,
  showroom
};

export const scooters = [
  {
    _id: "alfadrl",
    name: "Alfa+ (BLDC)",
    price: 41000,
    image: [alfadrl],
    video: bimmerVideo,
    category: "Electric",
    type: "BLDC",
    label: "BLDC · DOUBLE DISK BRAKE",
    engine: "1200W waterproof",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",

    specifications: {
      tyre: "12/12",
      battery: "72V",
      motorWatt: 1500,
      charger: "4A",
    },

    features: [
      "Music system",
      "Side stand sensor",
      "Bluetooth system",
      "Leather seat cover",
      "Waterproof motor",
      "Lead acid and lithium battery options",
      "High quality fiber body",
      "7-time adjustable rear shocker",
      "Welcome tune",
      "3-layer fiber paint",
    ],

    warranty: [
      { type: "motor", duration: "2 Year" },
      { type: "controller", duration: "1 Year" },
      { type: " charger", duration: "1 Year" },
      { type: "shocker", duration: "6 Month" },
      { type: "tyre", duration: "6 Month" },
      1,
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance.",
    },
  },
   {
    _id: "bimmer",
    name: "Bimmer",
    price: 41000,
    image: [bimmer1, bimmer2, bimmer3, bimmer4],
    video: bimmerVideo,
    category: "Electric",
    type: "Belt",
    label: "BLDC · DOUBLE DISK BRAKE",
    engine: "1200W waterproof",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",

    specifications: {
      tyre: "12/12",
      battery: "72V",
      motorWatt: 1500,
      charger: "4A",
    },

    features: [
      "Music system",
      "Side stand sensor",
      "Bluetooth system",
      "Leather seat cover",
      "Waterproof motor",
      "Lead acid and lithium battery options",
      "High quality fiber body",
      "7-time adjustable rear shocker",
      "Welcome tune",
      "3-layer fiber paint",
    ],

    warranty: [
      { type: "motor", duration: "2 Year" },
      { type: "controller", duration: "1 Year" },
      { type: " charger", duration: "1 Year" },
      { type: "shocker", duration: "6 Month" },
      { type: "tyre", duration: "6 Month" },
      1,
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance.",
    },
  },
   {
    _id: "eyelight",
    name: "Eyelight",
    price: 41000,
    image: [eyelight1, eyelight2, eyelight3, eyelight4],
    video: eyelightVideo,
    category: "Electric",
    type: "Belt",
    label: "BLDC · DOUBLE DISK BRAKE",
    engine: "1200W waterproof",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",

    specifications: {
      tyre: "12/12",
      battery: "72V",
      motorWatt: 1500,
      charger: "4A",
    },

    features: [
      "Music system",
      "Side stand sensor",
      "Bluetooth system",
      "Leather seat cover",
      "Waterproof motor",
      "Lead acid and lithium battery options",
      "High quality fiber body",
      "7-time adjustable rear shocker",
      "Welcome tune",
      "3-layer fiber paint",
    ],

    warranty: [
      { type: "motor", duration: "2 Year" },
      { type: "controller", duration: "1 Year" },
      { type: " charger", duration: "1 Year" },
      { type: "shocker", duration: "6 Month" },
      { type: "tyre", duration: "6 Month" },
      1,
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance.",
    },
  },
 {
    _id: "nuzzledrl",
    name: "Nuzzledrl",
    price: 41000,
    image: [nuzzledrl1, nuzzledrl2],
    video: eyelightVideo,
    category: "Electric",
    type: "BLDC",
    label: "BLDC · DOUBLE DISK BRAKE",
    engine: "1200W waterproof",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",

    specifications: {
      tyre: "12/12",
      battery: "72V",
      motorWatt: 1500,
      charger: "4A",
    },

    features: [
      "Music system",
      "Side stand sensor",
      "Bluetooth system",
      "Leather seat cover",
      "Waterproof motor",
      "Lead acid and lithium battery options",
      "High quality fiber body",
      "7-time adjustable rear shocker",
      "Welcome tune",
      "3-layer fiber paint",
    ],

    warranty: [
      { type: "motor", duration: "2 Year" },
      { type: "controller", duration: "1 Year" },
      { type: " charger", duration: "1 Year" },
      { type: "shocker", duration: "6 Month" },
      { type: "tyre", duration: "6 Month" },
      1,
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance.",
    },
  },
  {
    _id: "plenzer",
    name: "Plenzer",
    price: 41000,
    image: [plenzer1, plenzer2, plenzer3, plenzer4, plenzer5],
    video: eyelightVideo,
    category: "Electric",
    type: "BLDC",
    label: "BLDC · DOUBLE DISK BRAKE",
    engine: "1200W waterproof",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",

    specifications: {
      tyre: "12/12",
      battery: "72V",
      motorWatt: 1500,
      charger: "4A",
    },

    features: [
      "Music system",
      "Side stand sensor",
      "Bluetooth system",
      "Leather seat cover",
      "Waterproof motor",
      "Lead acid and lithium battery options",
      "High quality fiber body",
      "7-time adjustable rear shocker",
      "Welcome tune",
      "3-layer fiber paint",
    ],

    warranty: [
      { type: "motor", duration: "2 Year" },
      { type: "controller", duration: "1 Year" },
      { type: " charger", duration: "1 Year" },
      { type: "shocker", duration: "6 Month" },
      { type: "tyre", duration: "6 Month" },
      1,
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance.",
    },
  },
  {
    _id: "starbooster",
    name: "Starbooster",
    price: 41000,
    image: [starbooster],
    video: eyelightVideo,
    category: "Electric",
    type: "BLDC",
    label: "BLDC · DOUBLE DISK BRAKE",
    engine: "1200W waterproof",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",

    specifications: {
      tyre: "12/12",
      battery: "72V",
      motorWatt: 1500,
      charger: "4A",
    },

    features: [
      "Music system",
      "Side stand sensor",
      "Bluetooth system",
      "Leather seat cover",
      "Waterproof motor",
      "Lead acid and lithium battery options",
      "High quality fiber body",
      "7-time adjustable rear shocker",
      "Welcome tune",
      "3-layer fiber paint",
    ],

    warranty: [
      { type: "motor", duration: "2 Year" },
      { type: "controller", duration: "1 Year" },
      { type: " charger", duration: "1 Year" },
      { type: "shocker", duration: "6 Month" },
      { type: "tyre", duration: "6 Month" },
      1,
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance.",
    },
  },
];
