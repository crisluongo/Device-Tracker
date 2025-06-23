import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const number = request.nextUrl.searchParams.get('number') || ''

  // TODO: Add UPS API key integration and replace with real data
  const status = {
    trackingNumber: number,
    status: 'In Transit',
    estimatedDelivery: new Date(Date.now() + 86400000).toISOString().split('T')[0]
  }

  return NextResponse.json(status)
}
