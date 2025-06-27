import { NextResponse } from 'next/server'

export function GET() {
  // TODO: Add Datto API authentication and replace with real data
  const devices = [
    {
      id: '1',
      name: 'MacBook Pro 14',
      serial: 'ABC123456',
      status: 'active',
      trackingNumber: '1Z999AA10123456784'
    },
    {
      id: '2',
      name: 'MacBook Air 13',
      serial: 'DEF987654',
      status: 'inactive',
      trackingNumber: '1Z999AA10123456785'
    }
  ]

  return NextResponse.json(devices)
}
