import logo from "./logo.png";
import bimmer1 from "./bimmer1.jpeg";

export const assets = {
  logo,
  bimmer1,
};

export const scooters = [
  {
    _id: "scooter1",
    name: "Alfa+ (BLDC)",
    price: 41000,
    image: [bimmer1],
    video: bimmerVideo,
    category: "Electric",
    type: "BLDC",
    label: "BLDC · DOUBLE DISK BRAKE",
    engine: "1200W waterproof",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",
    
    specification : {
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
        {type: 'motor', duration: "2 Year"},
        {type: 'controller', duration: "1 Year"},
        {type: ' charger', duration: "1 Year"},
        {type: 'shocker', duration: "6 Month"},
        {type: 'tyre', duration: "6 Month"},
1   ],

        finance: {
      title: "Easy EMI | Flexible tenure",
      description: "Finance available with Bajaj Finance.",
    },
       },
  {
    _id: "scooter2",
    name: "Alfa+ (BLDC)",
    price: 41000,
    image: [bimmer1],
    category: "Electric",
    type: "BLDC",
    engine: "1500 W",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",
  },
  {
    _id: "scooter3",
    name: "Alfa+ (BLDC)",
    price: 41000,
    image: [bimmer1],
    category: "Electric",
    type: "BLDC",
    engine: "1500 W",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",
  },
  {
    _id: "scooter4",
    name: "Alfa+ (BLDC)",
    price: 41000,
    image: [bimmer1],
    category: "Electric",
    type: "BLDC",
    engine: "1500 W",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",
  },
  {
    _id: "scooter5",
    name: "Alfa+ (BLDC)",
    price: 41000,
    image: [bimmer1],
    category: "Electric",
    type: "BLDC",
    engine: "1500 W",
    milage: "80 KM range",
    specs: "60V · 1000W · 12/10 tyre",
    year: "2026",
  },
];
