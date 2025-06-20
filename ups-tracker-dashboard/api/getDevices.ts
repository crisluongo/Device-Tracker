import { Request, Response } from 'express';
import { Device } from '../types';

// TODO: Replace mock data with Addigy API integration and authentication
const mockDevices: Device[] = [
  {
    id: '1',
    name: 'MacBook Pro 14',
    serialNumber: 'ABC123456',
    addigyStatus: 'Enrolled',
    trackingNumber: '1Z999AA10123456784',
  },
  {
    id: '2',
    name: 'MacBook Air 13',
    serialNumber: 'XYZ987654',
    addigyStatus: 'Shipped',
    trackingNumber: '1Z999AA10123456785',
  },
];

export function getDevices(req: Request, res: Response) {
  // In a real implementation, use Addigy API keys here
  res.json(mockDevices);
}
