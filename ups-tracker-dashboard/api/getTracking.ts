import { Request, Response } from 'express';
import { TrackingInfo } from '../types';

// TODO: Replace this mock data with real UPS API calls
export function getTracking(req: Request, res: Response) {
  const { trackingNumber } = req.query;

  if (!trackingNumber || typeof trackingNumber !== 'string') {
    return res.status(400).json({ error: 'trackingNumber query param required' });
  }

  const mockTracking: TrackingInfo = {
    trackingNumber,
    status: 'in_transit',
    estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  };

  // In a real implementation, insert UPS API key and fetch tracking info here
  res.json(mockTracking);
}
