// src/components/ShipmentManagement.jsx
import styled from 'styled-components'
import { Truck, ChevronDown, LineChart } from 'lucide-react'

const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  min-height: 100vh;
  background: #f8f9fa;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  z-index: 100;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: #0A2647;
  
  svg {
    color: #1877F2;
  }
`

const NewShipmentButton = styled.button`
  background: #1877F2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background: #1664d8;
  }
`

const Sidebar = styled.aside`
  background: white;
  padding: 20px;
  border-right: 1px solid #eee;
  margin-top: 60px;
`

const FilterSection = styled.div`
  margin-bottom: 24px;
  
  h3 {
    font-size: 16px;
    color: #0A2647;
    margin-bottom: 12px;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
`

const StatusFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`

const StatusButton = styled.button`
  padding: 6px 12px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  background: ${props => {
    switch(props.status) {
      case 'In Transit': return '#1877F2';
      case 'Completed': return '#2ECC71';
      case 'Delayed': return '#F1C40F';
      case 'Issue': return '#E74C3C';
      default: return '#eee';
    }
  }};
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
`

const SaveFilterButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #00C853;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
  
  &:hover {
    background: #00B248;
  }
`

const MainContent = styled.main`
  padding: 80px 20px 20px;
`

const ViewControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const ViewToggle = styled.div`
  display: flex;
  gap: 8px;
`

const ViewButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: ${props => props.active ? '#1877F2' : '#fff'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  
  &:hover {
    background: ${props => props.active ? '#1664d8' : '#f5f5f5'};
  }
`

const ActionButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background: ${props => props.variant === 'primary' ? '#00C853' : '#1877F2'};
  color: white;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`

const ShipmentTable = styled.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  border-collapse: collapse;
`

const Th = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #eee;
  color: #0A2647;
`

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`

const Status = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
  background: ${props => {
    switch(props.status) {
      case 'In Transit': return '#e3f2fd';
      case 'Completed': return '#e8f5e9';
      case 'Delayed': return '#fff3e0';
      default: return '#ffebee';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'In Transit': return '#1877F2';
      case 'Completed': return '#2ECC71';
      case 'Delayed': return '#F1C40F';
      default: return '#E74C3C';
    }
  }};
`

const ActionLink = styled.a`
  color: #1877F2;
  text-decoration: none;
  margin-right: 12px;
  
  &:hover {
    text-decoration: underline;
  }
`

const DetailsSidebar = styled.aside`
  background: white;
  padding: 20px;
  border-left: 1px solid #eee;
  margin-top: 60px;
`

const DetailSection = styled.div`
  margin-bottom: 24px;
  
  h3 {
    font-size: 16px;
    color: #0A2647;
    margin-bottom: 12px;
  }
`

const Graph = styled.div`
  width: 100%;
  height: 200px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-top: 12px;
`

const ChecklistItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: #666;
`

export default function ShipmentManagement() {
  return (
    <>
      <Header>
        <Logo>
          <Truck size={24} />
          International Commerce Co.
        </Logo>
        <NewShipmentButton>New Shipment</NewShipmentButton>
      </Header>
      
      <Container>
        <Sidebar>
          <FilterSection>
            <h3>Filters</h3>
            <Select defaultValue="">
              <option value="" disabled>Date Range</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Custom range</option>
            </Select>
            
            <Select defaultValue="FedEx">
              <option>FedEx</option>
              <option>DHL</option>
              <option>UPS</option>
            </Select>
            
            <Select defaultValue="USA">
              <option>USA</option>
              <option>Canada</option>
              <option>Mexico</option>
            </Select>
          </FilterSection>
          
          <FilterSection>
            <h3>Status</h3>
            <StatusFilters>
              <StatusButton status="In Transit">In Transit</StatusButton>
              <StatusButton status="Completed">Completed</StatusButton>
              <StatusButton status="Delayed">Delayed</StatusButton>
              <StatusButton status="Issue">Issue</StatusButton>
            </StatusFilters>
          </FilterSection>
          
          <FilterSection>
            <h3>Priority Level</h3>
            <Select defaultValue="High">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Select>
          </FilterSection>
          
          <SaveFilterButton>Save Filter Preset</SaveFilterButton>
        </Sidebar>
        
        <MainContent>
          <ViewControls>
            <ViewToggle>
              <ViewButton active>List View</ViewButton>
              <ViewButton>Calendar View</ViewButton>
            </ViewToggle>
            <div style={{ display: 'flex', gap: '8px' }}>
              <ActionButton variant="primary">Bulk Actions</ActionButton>
              <ActionButton>
                Sort By
                <ChevronDown size={16} style={{ marginLeft: '4px' }} />
              </ActionButton>
            </div>
          </ViewControls>
          
          <ShipmentTable>
            <thead>
              <tr>
                <Th>Shipment ID</Th>
                <Th>Origin/Destination</Th>
                <Th>Status</Th>
                <Th>Departure Date</Th>
                <Th>Arrival Date</Th>
                <Th>Documents Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>#12345</Td>
                <Td>NYC/LAX</Td>
                <Td><Status status="In Transit">In Transit</Status></Td>
                <Td>2023-10-01</Td>
                <Td>2023-10-05</Td>
                <Td>Pending</Td>
                <Td>
                  <ActionLink href="#">View</ActionLink>
                  <ActionLink href="#">Edit</ActionLink>
                  <ActionLink href="#">Track</ActionLink>
                </Td>
              </tr>
              <tr>
                <Td>#12346</Td>
                <Td>LAX/SFO</Td>
                <Td><Status status="Completed">Completed</Status></Td>
                <Td>2023-09-28</Td>
                <Td>2023-10-02</Td>
                <Td>Complete</Td>
                <Td>
                  <ActionLink href="#">View</ActionLink>
                  <ActionLink href="#">Edit</ActionLink>
                  <ActionLink href="#">Track</ActionLink>
                </Td>
              </tr>
              <tr>
                <Td>#12347</Td>
                <Td>SFO/JFK</Td>
                <Td><Status status="Delayed">Delayed</Status></Td>
                <Td>2023-10-03</Td>
                <Td>2023-10-07</Td>
                <Td>Pending</Td>
                <Td>
                  <ActionLink href="#">View</ActionLink>
                  <ActionLink href="#">Edit</ActionLink>
                  <ActionLink href="#">Track</ActionLink>
                </Td>
              </tr>
            </tbody>
          </ShipmentTable>
        </MainContent>
        
        <DetailsSidebar>
          <DetailSection>
            <h3>Quick View</h3>
            <div>
              <p>Shipment ID: #12345</p>
              <p>Origin: NYC</p>
              <p>Destination: LAX</p>
            </div>
          </DetailSection>
          
          <DetailSection>
            <h3>Temperature Log</h3>
            <Graph>
              <LineChart size={200} />
            </Graph>
          </DetailSection>
          
          <DetailSection>
            <h3>Document Checklist</h3>
            <ChecklistItem>
              <input type="checkbox" checked readOnly />
              Bill of Lading
            </ChecklistItem>
            <ChecklistItem>
              <input type="checkbox" checked readOnly />
              Customs Declaration
            </ChecklistItem>
            <ChecklistItem>
              <input type="checkbox" checked readOnly />
              Invoice
            </ChecklistItem>
          </DetailSection>
          
          <DetailSection>
            <h3>Communication Thread</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>
              Latest message: "Shipment delayed due to weather conditions."
            </p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <ActionButton>Reply</ActionButton>
              <ActionButton variant="primary">Add Note</ActionButton>
            </div>
          </DetailSection>
        </DetailsSidebar>
      </Container>
    </>
  )
}