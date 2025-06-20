import DeviceTable, { Device } from '../components/DeviceTable'

async function fetchDevices() {
  const res = await fetch('http://localhost:3000/api/devices')
  return (await res.json()) as Device[]
}

async function fetchTracking(number: string) {
  const res = await fetch(`http://localhost:3000/api/tracking?number=${number}`)
  return await res.json()
}

export default async function Page() {
  const devices = await fetchDevices()
  const devicesWithTracking = await Promise.all(
    devices.map(async (d) => {
      const tracking = await fetchTracking(d.trackingNumber)
      return { ...d, deliveryStatus: tracking.status, estimatedDelivery: tracking.estimatedDelivery }
    })
  )

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Device Dashboard</h1>
      <DeviceTable devices={devicesWithTracking} />
    </main>
  )
}
