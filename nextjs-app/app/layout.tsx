import "../styles/globals.css"
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Device Tracker',
  description: 'Dashboard to track Mac shipments',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // TODO: Add client portal login
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
