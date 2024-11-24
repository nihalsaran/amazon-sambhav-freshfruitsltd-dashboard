import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Screens/LoginPage/LoginPage'
import Dashboard from './Screens/Dashboard/Dashboard'
import ShipmentManagement from './Screens/ShipmentManagement/ShipmentManagement'
import ImportersList from './Screens/DocumentVerification/ImportersList'
import ImporterDocuments from './Screens/DocumentVerification/ImporterDocuments'
import ProtectedRoute from './Components/ProtectedRoute'
import CreateShipment from './Screens/ShipmentManagement/CreateShipment'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/shipmentmanagement" element={<ShipmentManagement />} />
        <Route path="/importerslist" element={<ImportersList />} />
        <Route path="/importerdocs" element={<ImporterDocuments />} />
        <Route path="/newshipment" element={<CreateShipment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App