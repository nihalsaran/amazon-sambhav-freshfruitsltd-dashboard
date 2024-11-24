import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Screens/LoginPage/LoginPage'
import Dashboard from './Screens/Dashboard/Dashboard'
import ShipmentManagement from './Screens/ShipmentManagement/ShipmentManagement'
import ImportersList from './Screens/DocumentVerification/ImportersList'
import ImporterDocuments from './Screens/DocumentVerification/ImporterDocuments'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shipmentmanagement" element={<ShipmentManagement />} />
        <Route path="/importerslist" element={<ImportersList />} />
        <Route path="/importerdocs" element={<ImporterDocuments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App