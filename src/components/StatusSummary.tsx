import React from 'react'

interface Props {
  inUse: number
  readyForUse: number
  outOfService: number
}

export default function StatusSummary({ inUse, readyForUse, outOfService }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="bg-white border-l-4 border-blue-600 p-4 rounded shadow">
        <p className="text-sm text-gray-500">In Use</p>
        <p className="mt-2 text-2xl font-bold text-blue-600">{inUse}</p>
      </div>
      <div className="bg-white border-l-4 border-yellow-500 p-4 rounded shadow">
        <p className="text-sm text-gray-500">Ready for Use</p>
        <p className="mt-2 text-2xl font-bold text-yellow-600">{readyForUse}</p>
      </div>
      <div className="bg-white border-l-4 border-gray-500 p-4 rounded shadow">
        <p className="text-sm text-gray-500">Out of Service</p>
        <p className="mt-2 text-2xl font-bold text-gray-600">{outOfService}</p>
      </div>
    </div>
  )
}
