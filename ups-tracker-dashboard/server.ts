import express from 'express';
import path from 'path';
import { getDevices } from './api/getDevices';
import { getTracking } from './api/getTracking';

const app = express();
const PORT = process.env.PORT || 3000;

// Static files (React build output would go here after running `npm run build`)
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/getDevices', getDevices);
app.get('/api/getTracking', getTracking);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// To test locally with mock data:
// 1. Run `npm install`
// 2. Execute `npm run dev`
// 3. Visit http://localhost:3000/api/getDevices

// TODO: Add Addigy API authentication middleware
// TODO: Integrate UPS API key for real tracking data
// TODO: Implement login system for MSP clients to view their devices
// TODO: Add filtering by delivery status or customer
