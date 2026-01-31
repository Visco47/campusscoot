import React from 'react'

function ScooterCard({ scooter }) {
  const batteryColor = 
    scooter.batteryPercentage > 70 
      ? 'text-green-600' 
      : scooter.batteryPercentage > 30 
        ? 'text-yellow-600' 
        : 'text-red-600'

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
      <img 
        src={scooter.imageUrl} 
        alt={scooter.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          {scooter.name}
        </h3>
        <div className="flex justify-between items-center">
          <span className={`font-bold ${batteryColor}`}>
            Battery: {scooter.batteryPercentage}%
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
            scooter.available 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {scooter.available ? 'Available' : 'Rented'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ScooterCard