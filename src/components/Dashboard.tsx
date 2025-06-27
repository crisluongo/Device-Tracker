import StatusSummary from './StatusSummary'

interface Device {
  id: string
  name: string
  serial: string
  status: 'active' | 'inactive'
  trackingNumber: string
}

async function getDevices(): Promise<Device[]> {
  try {
    const res = await fetch('http://localhost:3000/api/devices', { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
  } catch {
    return []
  }
}

export default async function Dashboard() {
  const devices = await getDevices()
  const inUse = devices.filter(d => d.status === 'active').length
  const ready = devices.filter(d => d.status === 'inactive').length
  const out = 0

  return (
    <div className="p-8 space-y-8">
      <StatusSummary inUse={inUse} readyForUse={ready} outOfService={out} />
    </div>
  )
}
