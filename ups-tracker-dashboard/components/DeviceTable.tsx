import React, { useState } from 'react';
import { Device, TrackingInfo } from '../types';
import { TrackingStatus } from './TrackingStatus';

interface Props {
  devices: Device[];
  trackings: Record<string, TrackingInfo>;
}

export const DeviceTable: React.FC<Props> = ({ devices, trackings }) => {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<keyof Device>('name');

  const filtered = devices
    .filter(d =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.serialNumber.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortKey] || '';
      const bVal = b[sortKey] || '';
      return String(aVal).localeCompare(String(bVal));
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or serial"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="cursor-pointer" onClick={() => setSortKey('name')}>Name</th>
            <th className="cursor-pointer" onClick={() => setSortKey('serialNumber')}>Serial</th>
            <th>Status</th>
            <th>Tracking</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(device => (
            <tr key={device.id} className="border-t">
              <td className="p-2">{device.name}</td>
              <td className="p-2 font-mono">{device.serialNumber}</td>
              <td className="p-2">{device.addigyStatus}</td>
              <td className="p-2">
                {device.trackingNumber && trackings[device.trackingNumber] ? (
                  <TrackingStatus tracking={trackings[device.trackingNumber]} />
                ) : (
                  'N/A'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
