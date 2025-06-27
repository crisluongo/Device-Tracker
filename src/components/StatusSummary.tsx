import React from 'react'

interface Props {
  inUse: number
  readyForUse: number
  outOfService: number
}

export default function StatusSummary({ inUse, readyForUse, outOfService }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-500 text-center">
        <p className="text-sm font-medium text-gray-500">In Use</p>
        <p className="mt-2 text-3xl font-bold text-blue-600">{inUse}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border-t-4 border-orange-500 text-center">
        <p className="text-sm font-medium text-gray-500">Ready for Use</p>
        <p className="mt-2 text-3xl font-bold text-orange-600">{readyForUse}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow border-t-4 border-gray-500 text-center">
        <p className="text-sm font-medium text-gray-500">Out of Service</p>
        <p className="mt-2 text-3xl font-bold text-gray-600">{outOfService}</p>
      </div>
    </div>
  )
}
