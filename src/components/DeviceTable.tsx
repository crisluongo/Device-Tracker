'use client'

import React from 'react'

export interface Device {
  id: string
  name: string
  serial: string
  status: 'active' | 'inactive'
  trackingNumber: string
  deliveryStatus?: string
  estimatedDelivery?: string
}

interface Props {
  devices: Device[]
}

const DeviceTable: React.FC<Props> = ({ devices }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking #</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {devices.map(device => (
            <tr key={device.id}>
              <td className="px-6 py-4 whitespace-nowrap">{device.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{device.serial}</td>
              <td className="px-6 py-4 whitespace-nowrap">{device.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{device.trackingNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{device.deliveryStatus}</td>
              <td className="px-6 py-4 whitespace-nowrap">{device.estimatedDelivery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DeviceTable
