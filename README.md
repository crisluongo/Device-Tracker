# Device Tracker Dashboard

Track Mac and PC device deployments for clients and monitor device status at each stage.

This is a starter Next.js 14+ project for tracking Mac device shipments. It uses the App Router and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000> in your browser.

## Structure
- `app/` – App Router pages and API routes
- `components/` – React components
- `styles/` – global CSS

API routes currently return mock data. Replace with real Datto and UPS integrations later.

## TODO
- Integrate Datto API for device data
- Integrate UPS API for shipment tracking
- Implement secure client portal login
