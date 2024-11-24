import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Screens/LoginPage/LoginPage'
import Dashboard from './Screens/Dashboard/Dashboard'
import ShipmentManagement from './Screens/ShipmentManagement/ShipmentManagement'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shipmentmanagement" element={<ShipmentManagement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App