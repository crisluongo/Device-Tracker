import React, { useEffect, useState } from 'react';
import { Device, TrackingInfo } from '../types';
import { DeviceTable } from '../components/DeviceTable';

export default function IndexPage() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [trackings, setTrackings] = useState<Record<string, TrackingInfo>>({});

  useEffect(() => {
    fetch('/api/getDevices')
      .then(res => res.json())
      .then((data: Device[]) => {
        setDevices(data);
        data.forEach(device => {
          if (device.trackingNumber) {
            fetch(`/api/getTracking?trackingNumber=${device.trackingNumber}`)
              .then(res => res.json())
              .then((info: TrackingInfo) =>
                setTrackings(prev => ({ ...prev, [device.trackingNumber!]: info }))
              )
              .catch(() => {});
          }
        });
      });
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Device Dashboard</h1>
      <DeviceTable devices={devices} trackings={trackings} />
    </main>
  );
}
