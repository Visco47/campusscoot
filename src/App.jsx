import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AvailableScooters from './components/AvailableScooters'
import RentedScooters from './components/RentedScooters'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark', !isDarkMode)
  }

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <nav className="bg-gray-100 dark:bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Campus Scooter Rental</h1>
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:text-blue-600">Available Scooters</Link>
              <Link to="/rented" className="hover:text-blue-600">Rented Scooters</Link>
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<AvailableScooters />} />
          <Route path="/rented" element={<RentedScooters />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App