import React from 'react';
import { TrackingInfo } from '../types';
import { formatDate } from '../utils/formatDate';

interface Props {
  tracking: TrackingInfo;
}

// Displays colored label for delivery status
export const TrackingStatus: React.FC<Props> = ({ tracking }) => {
  const statusColors: Record<TrackingInfo['status'], string> = {
    delivered: 'text-green-600',
    in_transit: 'text-blue-600',
    exception: 'text-red-600',
    unknown: 'text-gray-600',
  };

  return (
    <span className={statusColors[tracking.status] || 'text-gray-600'}>
      {tracking.status.replace('_', ' ')} -
      <span className="ml-1">{formatDate(tracking.estimatedDelivery)}</span>
    </span>
  );
};
