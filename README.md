# Anika P Enterprises — Electric Scooter Dealer

A responsive dealership website for Anika P Enterprises, an electric scooter dealer serving customers in Basti, Uttar Pradesh. The site helps visitors explore scooter models, compare specifications and prices, learn about the dealership, and request a test ride.

**Live website:** [anikapenterprises.in](https://anikapenterprises.in)

## Features

- Responsive home, scooter catalogue, scooter detail, About, Contact, and 404 pages
- Scooter cards and detail pages populated from a central product catalogue
- Catalogue filters for scooter types, including models assigned to multiple types
- Price formatting in Indian rupee notation and ascending price sorting
- Scooter image and video galleries, with lazy loading for catalogue images and thumbnails
- Test ride request form with model selection, preferred date, validation, and toast feedback
- Email notifications for test ride requests through EmailJS
- Click-to-call and WhatsApp links, plus a QR code linking to the shop’s Google listing
- Reusable layout, navigation, footer, buttons, and responsive content container
- Route-aware page titles and metadata, plus LocalBusiness structured data

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Router 7
- EmailJS for test ride request emails
- `react-hot-toast` for form feedback
- `qrcode.react` for the shop listing QR code
- Cloudflare for deployment

## Getting started

### Requirements

- Node.js and npm
- An EmailJS account configured with a service and email template to enable test ride email delivery

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Environment variables

Create a `.env.local` file in the project root:

```env
VITE_GOOGLE_SHOP_URL=https://www.google.com/maps/search/?api=1&query=Anika+P+Enterprises
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

The EmailJS template should accept these parameters from the contact form:

| Parameter | Form value |
| --- | --- |
| `user_name` | Customer name |
| `user_phone` | Customer phone number |
| `user_address` | Customer address |
| `scooter_model` | Selected scooter name |
| `preferred_date` | Requested test ride date |

Vite variables prefixed with `VITE_` are included in the client-side bundle. Only use the EmailJS public key in the frontend; do not put private API credentials or access tokens in these variables. Configure the same variables in the hosting provider’s production environment settings. The Google listing URL has a fallback if its variable is omitted.

## Product catalogue and assets

Scooter records and imported images/videos are maintained in `src/assets/assets.js`. Each scooter uses a unique `_id` for its detail route and can include:

- `name`, numeric `price`, `type`, `label`, and `specs`
- `image` as an array of imported image assets
- `video` as one imported video or an array of videos
- `specifications`, `features`, `warranty`, and `finance` details

Keep image and video files in `src/assets`, import them at the top of `assets.js`, and add the imports to the exported `assets` object or the relevant scooter record. Scooter detail URLs use `/scooters/:id`.

## Available scripts

```bash
npm run dev       # Start the Vite development server
npm run build     # Create the production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Production deployment

For a Cloudflare Pages Git deployment, connect the repository and configure:

- **Root directory:** `/` (the directory containing `package.json`)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variables:** the four `VITE_...` values listed above

The project uses React Router client-side routes. Configure the hosting platform to serve the app entry point for route requests so refreshing a detail or other nested route works correctly. Verify the home page, a scooter detail URL, the Contact page, and an unknown URL after deployment.

## Project structure

```text
src/
├── assets/          # Scooter, showroom, and logo media; product catalogue
├── components/      # Shared layout, navigation, footer, cards, SEO, and UI
├── data/            # Business information
├── pages/           # Home, catalogue, details, About, Contact, and 404 pages
├── utils/           # Price formatting and WhatsApp link helpers
├── App.jsx          # Client-side routes
├── index.css        # Tailwind import, design tokens, and global styles
└── main.jsx         # React application entry point
```

## Booking and messaging

Test ride form submissions currently send email through EmailJS. The WhatsApp links open a prefilled chat for the visitor to send manually. Automatic WhatsApp notifications to the dealership require a server-side integration, such as a Cloudflare Worker connected to the WhatsApp Business Platform; this is separate from the current frontend form flow.
