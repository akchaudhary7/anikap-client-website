import logo from "./logo.png";

import alfabldc1 from "./alfabldc1.jpeg";
import alfabldc2 from "./alfabldc2.jpeg";
import alfabldc3 from "./alfabldc3.jpeg";
import alfabldc4 from "./alfabldc4.jpeg";
import alfabldc5 from "./alfabldc5.jpeg";
import alfabldc6 from "./alfabldc6.jpeg";
import alfabldc7 from "./alfabldc7.jpeg";
import alfabldc8 from "./alfabldc8.jpeg";

import alfadrl1 from "./alfadrl1.jpeg";
import alfadrl2 from "./alfadrl2.jpeg";
import alfadrl3 from "./alfadrl3.jpeg";
import alfadrl4 from "./alfadrl4.jpeg";
import alfadrl5 from "./alfadrl5.jpeg";
import alfadrlVideo from "./alfadrlVideo.mp4";

import bimmer1 from "./bimmer1.jpeg";
import bimmer2 from "./bimmer2.jpeg";
import bimmer3 from "./bimmer3.jpeg";
import bimmer4 from "./bimmer4.jpeg";
import bimmer5 from "./bimmer5.jpeg";
import bimmer6 from "./bimmer6.jpeg";
import bimmer7 from "./bimmer7.jpeg";
import bimmer8 from "./bimmer8.jpeg";
import bimmerVideo from "./bimmerVideo.mp4";

import eyelight1 from "./eyelight1.jpeg";
import eyelight2 from "./eyelight2.jpeg";
import eyelight3 from "./eyelight3.jpeg";
import eyelight4 from "./eyelight4.jpeg";
import eyelightVideo from "./eyelightVideo.mp4";
import eyelightVideo2 from "./eyelightVideo2.mp4";
import eyelightVideo3 from "./eyelightVideo3.mp4";

import nuzzlebldc1 from "./nuzzlebldc1.jpeg";
import nuzzlebldc2 from "./nuzzlebldc2.jpeg";
import nuzzlebldc3 from "./nuzzlebldc3.jpeg";
import nuzzlebldc4 from "./nuzzlebldc4.jpeg";
import nuzzlebldc5 from "./nuzzlebldc5.jpeg";
import nuzzlebldc6 from "./nuzzlebldc6.jpeg";

import nuzzledrl1 from "./nuzzledrl1.jpeg";
import nuzzledrl2 from "./nuzzledrl2.jpeg";
import nuzzledrl3 from "./nuzzledrl3.jpeg";
import nuzzledrl4 from "./nuzzledrl4.jpeg";
import nuzzledrl5 from "./nuzzledrl5.jpeg";

import plenzer1 from "./plenzer1.jpeg";
import plenzer2 from "./plenzer2.jpeg";
import plenzer3 from "./plenzer3.jpeg";
import plenzer4 from "./plenzer4.jpeg";
import plenzer5 from "./plenzer5.jpeg";
import plenzer6 from "./plenzer5.jpeg";
import plenzer7 from "./plenzer5.jpeg";
import plenzer8 from "./plenzer5.jpeg";
import plenzer9 from "./plenzer5.jpeg";
import plenzer10 from "./plenzer5.jpeg";
import plenzer11 from "./plenzer5.jpeg";
import plenzer12 from "./plenzer5.jpeg";
import plenzer13 from "./plenzer5.jpeg";
import plenzer14 from "./plenzer5.jpeg";
import plenzer15 from "./plenzer5.jpeg";
import plenzer16 from "./plenzer5.jpeg";
import plenzerVideo from "./plenzerVideo.mp4";

import starbooster1 from "./starbooster1.jpeg";
import starbooster2 from "./starbooster2.jpeg";
import starbooster3 from "./starbooster3.jpeg";
import starbooster4 from "./starbooster4.jpeg";
import starbooster5 from "./starbooster5.jpeg";
import starbooster6 from "./starbooster6.jpeg";
import starbooster7 from "./starbooster7.jpeg";
import starbooster8 from "./starbooster8.jpeg";
import starboosterVideo from "./starboosterVideo.mp4";

import showroom from "./showroom.jpeg";

export const assets = {
  logo,

  alfabldc1,
  alfabldc2,
  alfabldc3,
  alfabldc4,
  alfabldc5,
  alfabldc6,
  alfabldc7,
  alfabldc8,

  alfadrl1,
  alfadrl2,
  alfadrl3,
  alfadrl4,
  alfadrl5,
  alfadrlVideo,

  bimmer1,
  bimmer2,
  bimmer3,
  bimmer4,
  bimmer5,
  bimmer6,
  bimmer7,
  bimmer8,
  bimmerVideo,

  eyelight1,
  eyelight2,
  eyelight3,
  eyelight4,
  eyelightVideo,
  eyelightVideo2,
  eyelightVideo3,

  nuzzlebldc1,
  nuzzlebldc2,
  nuzzlebldc3,
  nuzzlebldc4,
  nuzzlebldc5,
  nuzzlebldc6,

  nuzzledrl1,
  nuzzledrl2,
  nuzzledrl3,
  nuzzledrl4,
  nuzzledrl5,

  plenzer1,
  plenzer2,
  plenzer3,
  plenzer4,
  plenzer5,
  plenzer6,
  plenzer7,
  plenzer8,
  plenzer9,
  plenzer10,
  plenzer11,
  plenzer12,
  plenzer13,
  plenzer14,
  plenzer15,
  plenzer16,
  plenzerVideo,

  starbooster1,
  starbooster2,
  starbooster3,
  starbooster4,
  starbooster5,
  starbooster6,
  starbooster7,
  starbooster8,
  starboosterVideo,

  showroom,
};

export const scooters = [
  {
    _id: "bimmer",
    name: "Bimmer",
    price: 67900,
    image: [
      bimmer1,
      bimmer2,
      bimmer3,
      bimmer4,
      bimmer5,
      bimmer6,
      bimmer7,
      bimmer8,
    ],
    video: bimmerVideo,
    category: "Electric",
    type: "BLDC",
    label: "BLDC · DUAL DISK BRAKE",
    engine: "1200W waterproof",
    specs: "60V · 1200W · 12/12 tyre",

    specifications: {
      Tyre: "12/12",
      Average: "70-80 KM Range",
      MotorWatt: "1200 W",
      charger: "4A",
    },

    features: [
      "12/12 Tyre",
      "Dual Disk Brake",
      "Floppy Key",
      "Music System",
      "Bluetooth System",
      "Welcome Tune",
      "Leather Seat Cover",
      "7-Time Adjustable Shocker",
      "3-Layer Fiber Paint",
      "High Quality Fiber",
      "1200W Water Proof Motor",
    ],

    warranty: [
      { type: "Motor", duration: "18 Months" },
      { type: "Controller", duration: "18 Months" },
      { type: "Charger", duration: "12 Months" },
      { type: "Shocker", duration: "6 Months" },
      { type: "Tyre", duration: "6 Months" },
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance & Aakasha Finance.",
    },
  },

  {
    _id: "eyelight",
    name: "Eyelight",
    price: 69900,
    image: [eyelight1, eyelight2, eyelight3, eyelight4],
    video: [eyelightVideo, eyelightVideo2, eyelightVideo3],
    category: "Electric",
    type: "MID Drive",
    label: "MID Drive · COMBO BRAKE",
    engine: "1500W waterproof",
    specs: "72V · 1500W · 12/12 tyre",

    specifications: {
      Tyre: "12/12",
      Average: "90-100 KM Range",
      MotorWatt: "1500 W",
      charger: "4A",
    },

    features: [
      "MID Drive Model",
      "12/12 Tyre",
      "Music System",
      "Bluetooth System",
      "Welcome Tone",
      "High Quality Fiber",
      "Combo Brake",
      "Floppy Key",
      "Leather Seat Cover",
      "Side Stand Sensor",
      "72V High Quality Lead Acid & Lithium Battery",
      "Eye Projector Lamp",
      "1500W Water Proof Motor",
      "3-Layer Paint",
      "7-Time Adjustable Shocker",
    ],

    warranty: [
      { type: "Motor", duration: "30 Months" },
      { type: "Controller", duration: "30 Months" },
      { type: "Charger", duration: "12 Months" },
      { type: "Shocker", duration: "6 Months" },
      { type: "Tyre", duration: "6 Months" },
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance & Aakasha Finance.",
    },
  },

  {
    _id: "nuzzledrl",
    name: "Nuzzle DRL (MID Drive)",
    price: 64900,
    image: [nuzzledrl1, nuzzledrl2, nuzzledrl3, nuzzledrl4, nuzzledrl5],
    category: "Electric",
    type: "MID Drive",
    label: "MID Drive · FRONT DISK BRAKE",
    engine: "1500W waterproof",
    specs: "72V · 1500W · 12/12 tyre",

    specifications: {
      Tyre: "12/12",
      Average: "90-100 KM Range",
      MotorWatt: "1500 W",
      charger: "4A",
    },

    features: [
      "MID Drive Model",
      "12/12 Tyre",
      "1500W Motor",
      "Side Stand Sensor",
      "Music System",
      "Bluetooth System",
      "High Quality Fiber Body",
      "7-Time Adjustable Shocker",
      "3-Layer Fiber Paint",
      "Welcome Tune",
      "72V High Quality Battery - Lead Acid & Lithium",
      "Leather Seat Cover",
      "Floppy Key System",
    ],

    warranty: [
      { type: "Motor", duration: "30 Months" },
      { type: "Controller", duration: "30 Months" },
      { type: "Charger", duration: "12 Months" },
      { type: "Shocker", duration: "6 Months" },
      { type: "Tyre", duration: "6 Months" },
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance & Aakasha Finance.",
    },
  },

  {
    _id: "nuzzlebldc",
    name: "Nuzzle+ (BLDC)",
    price: 51900,
    image: [
      nuzzlebldc1,
      nuzzlebldc2,
      nuzzlebldc3,
      nuzzlebldc4,
      nuzzlebldc5,
      nuzzlebldc6,
    ],
    category: "Electric",
    type: "BLDC",
    label: "BLDC · FRONT DISK BRAKE",
    engine: "1000W waterproof",
    specs: "60V · 1000W · 12/10 tyre",

    specifications: {
      Tyre: "12/10",
      Average: "70-80 KM Range",
      MotorWatt: "1000 W",
      charger: "4A",
    },

    features: [
      "12/10 Tyre",
      "1000W Motor",
      "Side Stand Sensor",
      "Music System",
      "Floppy Key System",
      "Leather Seat Cover",
      "High Quality Fiber Body",
      "60V High Quality Battery - Lead Acid & Lithium",
      "Floppy Key",
    ],

    warranty: [
      { type: "Motor", duration: "18 Months" },
      { type: "Controller", duration: "18 Months" },
      { type: "Charger", duration: "12 Months" },
      { type: "Shocker", duration: "6 Months" },
      { type: "Tyre", duration: "6 Months" },
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance & Aakasha Finance.",
    },
  },

  {
    _id: "alfabldc",
    name: "Alfa+ (BLDC)",
    price: 49500,
    image: [
      alfabldc1,
      alfabldc2,
      alfabldc3,
      alfabldc4,
      alfabldc5,
      alfabldc6,
      alfabldc7,
      alfabldc8,
    ],
    category: "Electric",
    type: "BLDC",
    label: "BLDC · FRONT DISK BRAKE",
    engine: "1000W waterproof",
    specs: "60V · 1000W · 12/10 tyre",

    specifications: {
      Tyre: "12/10",
      Average: "70-80 KM Range",
      MotorWatt: "1000 W",
      charger: "4A",
    },

    features: [
      "12/10 Tyre",
      "Music System",
      "Side Stand Sensor",
      "Bluetooth System",
      "High Quality Fiber Body",
      "Leather Seat Cover",
      "1000W Motor",
      "60V High Quality Battery - Lead Acid & Lithium",
      "7-Time Adjustable Shocker",
      "Welcome Tune",
      "3-Layer Fiber Paint",
    ],

    warranty: [
      { type: "Motor", duration: "18 Months" },
      { type: "Controller", duration: "18 Months" },
      { type: "Charger", duration: "12 Months" },
      { type: "Shocker", duration: "6 Months" },
      { type: "Tyre", duration: "6 Months" },
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance & Aakasha Finance.",
    },
  },

  {
    _id: "alfadrl",
    name: "Alfa DRL (MID Drive)",
    price: 63500,
    image: [alfadrl1, alfadrl2, alfadrl3, alfadrl4, alfadrl5],
    video: alfadrlVideo,
    category: "Electric",
    type: "MID Drive",
    label: "MID Drive · FRONT DISK BRAKE",
    engine: "1500W waterproof",
    specs: "72V · 1500W · 12/12 tyre",

    specifications: {
      Tyre: "12/12",
      Average: "90-100 KM Range",
      MotorWatt: "1500 W",
      charger: "4A",
    },

    features: [
      "MID Drive Model",
      "12/12 Tyre",
      "Music System",
      "Side Stand Sensor",
      "Bluetooth System",
      "Leather Seat Cover",
      "1500W Waterproof Motor",
      "72V High Quality Battery - Lead Acid & Lithium",
      "High Quality Fiber Body",
      "7-Time Adjustable Rear Shocker",
      "Welcome Tune",
      "3-Layer Fiber Paint",
    ],

    warranty: [
      { type: "Motor", duration: "30 Months" },
      { type: "Controller", duration: "24 Months" },
      { type: "Charger", duration: "12 Months" },
      { type: "Shocker", duration: "6 Months" },
      { type: "Tyre", duration: "6 Months" },
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance & Aakasha Finance.",
    },
  },

  {
    _id: "plenzer",
    name: "Plenzer",
    price: 65500,
    image: [
      plenzer1,
      plenzer2,
      plenzer3,
      plenzer4,
      plenzer5,
      plenzer6,
      plenzer7,
      plenzer8,
      plenzer9,
      plenzer10,
      plenzer11,
      plenzer12,
      plenzer13,
      plenzer14,
      plenzer15,
      plenzer16,
    ],
    video: plenzerVideo,
    category: "Electric",
    type: "BLDC",
    label: "BLDC · DUAL DISK BRAKE",
    engine: "1200W waterproof",
    specs: "60V · 1200W · 12/12 tyre",
    year: "2026",

    specifications: {
      Tyre: "12/12",
      Average: "70-80 KM Range",
      MotorWatt: "1200 W",
      charger: "4A",
    },

    features: [
      "12/12 Tyre",
      "Music System",
      "Bluetooth System",
      "Leather Seat Cover",
      "1200W Waterproof Motor",
      "60V High Quality Battery - Lead Acid & Lithium",
      "High Quality Fiber Body",
      "7-Time Adjustable Rear Shocker",
      "Welcome Tune",
      "3-Layer Fiber Paint",
    ],

    warranty: [
      { type: "Motor", duration: "18 Months" },
      { type: "Controller", duration: "18 Months" },
      { type: "Charger", duration: "12 Months" },
      { type: "Shocker", duration: "6 Months" },
      { type: "Tyre", duration: "6 Months" },
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance & Aakasha Finance.",
    },
  },

  {
    _id: "starbooster",
    name: "Starbooster",
    price: 65900,
    image: [
      starbooster1,
      starbooster2,
      starbooster3,
      starbooster4,
      starbooster5,
      starbooster6,
      starbooster7,
      starbooster8,
    ],
    video: starboosterVideo,
    category: "Electric",
    type: ["MID Drive", "BLDC"],
    label: "BLDC · MID Drive · DUAL DISK BRAKE",
    engine: "1200W waterproof",

    specs: "60V · 1200W · 12/12 tyre",

    specifications: {
      Tyre: "12/12",
      Average: "70-80 KM Range",
      MotorWatt: "1200 W",
      charger: "4A",
    },

    features: [
      "12/12 Tyre",
      "Dual Disk Brake",
      "Floppy Key",
      "Music System",
      "Bluetooth System",
      "Welcome Tune",
      "7-Time Adjustable Rear Shocker",
      "3-Layer Fiber Paint",
      "High Quality Fiber",
      "1200W Water Proof Motor",
      "Side Stand Sensor",
    ],

    warranty: [
      { type: "Motor", duration: "18 Months" },
      { type: "Controller", duration: "18 Months" },
      { type: "Charger", duration: "12 Months" },
      { type: "Shocker", duration: "6 Months" },
      { type: "Tyre", duration: "6 Months" },
    ],

    finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance & Aakasha Finance.",
    },
  },
];
