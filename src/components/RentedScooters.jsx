import React from 'react'
import ScooterCard from './ScooterCard'

const scooters = [
  {
    id: 3,
    name: 'Speedy Z3',
    batteryPercentage: 45,
    imageUrl: 'https://picsum.photos/300/200?random=3',
    available: false
  },
  {
    id: 4,
    name: 'Electric Runner',
    batteryPercentage: 30,
    imageUrl: 'https://picsum.photos/300/200?random=4',
    available: false
  }
]

function RentedScooters() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Rented Scooters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scooters
          .filter(scooter => !scooter.available)
          .map(scooter => (
            <ScooterCard key={scooter.id} scooter={scooter} />
          ))
        }
      </div>
    </div>
  )
}

export default RentedScooters