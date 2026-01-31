import React from 'react'
import ScooterCard from './ScooterCard'

const scooters = [
  {
    id: 1,
    name: 'Urban Glider X1',
    batteryPercentage: 85,
    imageUrl: 'https://picsum.photos/300/200?random=1',
    available: true
  },
  {
    id: 2,
    name: 'Campus Cruiser Pro',
    batteryPercentage: 65,
    imageUrl: 'https://picsum.photos/300/200?random=2',
    available: true
  }
]

function AvailableScooters() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Available Scooters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scooters
          .filter(scooter => scooter.available)
          .map(scooter => (
            <ScooterCard key={scooter.id} scooter={scooter} />
          ))
        }
      </div>
    </div>
  )
}

export default AvailableScooters