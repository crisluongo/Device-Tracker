export interface Device {
  id: string;
  name: string;
  serialNumber: string;
  addigyStatus: string;
  trackingNumber?: string;
}

export interface TrackingInfo {
  trackingNumber: string;
  status: 'delivered' | 'in_transit' | 'exception' | 'unknown';
  estimatedDelivery: string; // ISO date string
}
