// src/components/CreateShipment.jsx
import styled from 'styled-components'
import { Plane, Ship, Truck, Calendar, Upload, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'

const Container = styled.div`
  padding: 20px;
  background: #f8f9fa;
  min-height: 100vh;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      color: #1877F2;
    }
  }
  
  span {
    color: #333;
    font-size: 14px;
  }
`

const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
`

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  
  ${props => {
    switch(props.variant) {
      case 'primary':
        return `
          background: #1877F2;
          color: white;
          border: none;
          
          &:hover {
            background: #1664d8;
          }
        `;
      case 'secondary':
        return `
          background: #e9ecef;
          color: #333;
          border: none;
          
          &:hover {
            background: #dee2e6;
          }
        `;
      default:
        return '';
    }
  }}
`

const Section = styled.section`
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  
  h2 {
    color: #0A2647;
    font-size: 18px;
    margin-bottom: 20px;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`

const FormGroup = styled.div`
  margin-bottom: 16px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #333;
  }
  
  input, select {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #1877F2;
    }
  }
`

const TransportModes = styled.div`
  display: flex;
  gap: 16px;
`

const TransportMode = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${props => props.selected ? '#e3f2fd' : 'white'};
  color: ${props => props.selected ? '#1877F2' : '#666'};
  cursor: pointer;
  
  &:hover {
    background: #e3f2fd;
    color: #1877F2;
  }
`

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
  
  th {
    text-align: left;
    padding: 12px;
    background: #f8f9fa;
    border-bottom: 2px solid #dee2e6;
    font-size: 14px;
    color: #333;
  }
  
  td {
    padding: 12px;
    border-bottom: 1px solid #dee2e6;
    
    input {
      width: 100%;
      padding: 6px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
`

const CarrierOption = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${props => props.selected ? '#e3f2fd' : 'white'};
  
  &:hover {
    background: #e3f2fd;
  }
  
  img {
    width: 48px;
    height: 48px;
    margin-right: 16px;
  }
`

const CarrierInfo = styled.div`
  flex: 1;
  
  h3 {
    font-size: 16px;
    margin-bottom: 4px;
  }
  
  p {
    color: #666;
    font-size: 14px;
  }
`

const UploadZone = styled.div`
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    border-color: #1877F2;
  }
`

const FileList = styled.div`
  margin-top: 16px;
`

const FileItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eee;
  
  span {
    flex: 1;
    font-size: 14px;
  }
  
  button {
    color: #dc3545;
    background: none;
    border: none;
    cursor: pointer;
    
    &:hover {
      color: #c82333;
    }
  }
`

const Summary = styled.div`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 4px;
  
  p {
    margin-bottom: 8px;
    font-size: 14px;
    
    strong {
      color: #0A2647;
    }
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
`

export default function CreateShipment() {
  const [transportMode, setTransportMode] = useState('air')
  const [selectedCarrier, setSelectedCarrier] = useState('dhl')
  
  return (
    <Container>
      <Header>
        <Breadcrumb>
          <a href="#">Home</a>
          <ChevronRight size={16} />
          <a href="#">Shipments</a>
          <ChevronRight size={16} />
          <span>Create New Shipment</span>
        </Breadcrumb>
        
        <HeaderActions>
          <Button variant="secondary">Save Draft</Button>
          <Button variant="primary">Help</Button>
        </HeaderActions>
      </Header>
      
      <form>
        <Section>
          <h2>Shipment Details</h2>
          <FormGrid>
            <FormGroup>
              <label>Shipment Name</label>
              <input type="text" placeholder="Exotic Fruit Shipment #2024-11" />
            </FormGroup>
            
            <FormGroup>
              <label>Shipment Date</label>
              <div style={{ position: 'relative' }}>
                <input type="text" placeholder="YYYY-MM-DD" />
                <Calendar size={16} style={{ position: 'absolute', right: 12, top: 10, color: '#666' }} />
              </div>
            </FormGroup>
            
            <FormGroup>
              <label>Importer/Buyer Name</label>
              <select>
                <option value="">Select an importer</option>
                <option>Alpha Imports</option>
                <option>Beta Trading Co.</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label>Destination</label>
              <select>
                <option value="">Select a destination</option>
                <option>Paris, France</option>
                <option>London, UK</option>
              </select>
            </FormGroup>
          </FormGrid>
          
          <FormGroup>
            <label>Mode of Transport</label>
            <TransportModes>
              <TransportMode 
                selected={transportMode === 'air'}
                onClick={() => setTransportMode('air')}
              >
                <Plane size={16} />
                Air
              </TransportMode>
              
              <TransportMode 
                selected={transportMode === 'sea'}
                onClick={() => setTransportMode('sea')}
              >
                <Ship size={16} />
                Sea
              </TransportMode>
              
              <TransportMode 
                selected={transportMode === 'road'}
                onClick={() => setTransportMode('road')}
              >
                <Truck size={16} />
                Road
              </TransportMode>
            </TransportModes>
          </FormGroup>
        </Section>
        
        <Section>
          <h2>Product Details</h2>
          <ProductTable>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity (units)</th>
                <th>Unit Weight</th>
                <th>Total Weight</th>
                <th>Packaging Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" /></td>
                <td><input type="number" /></td>
                <td><input type="number" /></td>
                <td><input type="number" disabled /></td>
                <td><input type="text" /></td>
              </tr>
            </tbody>
          </ProductTable>
          <Button variant="primary">Add Row</Button>
        </Section>
        
        <Section>
          <h2>Shipping Carrier Selection</h2>
          <CarrierOption 
            selected={selectedCarrier === 'dhl'}
            onClick={() => setSelectedCarrier('dhl')}
          >
            <img src="/placeholder.svg" alt="DHL" />
            <CarrierInfo>
              <h3>DHL</h3>
              <p>Estimated Cost: $200 | Delivery Time: 3-5 Days</p>
            </CarrierInfo>
          </CarrierOption>
          
          <CarrierOption 
            selected={selectedCarrier === 'fedex'}
            onClick={() => setSelectedCarrier('fedex')}
          >
            <img src="/placeholder.svg" alt="FedEx" />
            <CarrierInfo>
              <h3>FedEx</h3>
              <p>Estimated Cost: $180 | Delivery Time: 4-7 Days</p>
            </CarrierInfo>
          </CarrierOption>
          
          <Button variant="secondary">Request Quotes from Carriers</Button>
        </Section>
        
        <Section>
          <h2>Compliance Documents</h2>
          <UploadZone>
            <Upload size={24} style={{ color: '#666', marginBottom: 8 }} />
            <p>Drag and drop to upload or <a href="#" style={{ color: '#1877F2' }}>choose file</a></p>
          </UploadZone>
          
          <FileList>
            <FileItem>
              <span>Invoice.pdf</span>
              <button><X size={16} /></button>
            </FileItem>
            <FileItem>
              <span>Bill_of_Lading.pdf</span>
              <button><X size={16} /></button>
            </FileItem>
          </FileList>
        </Section>
        
        <Section>
          <h2>Summary & Confirmation</h2>
          <Summary>
            <p><strong>Shipment Name:</strong> Exotic Fruit Shipment #2024-11</p>
            <p><strong>Total Weight:</strong> 100 kg</p>
            <p><strong>Destination:</strong> Paris, France</p>
            <p><strong>Selected Carrier:</strong> DHL</p>
            <p><strong>Cost Estimate:</strong> $200</p>
          </Summary>
        </Section>
        
        <Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="secondary">Save Draft</Button>
          <Button variant="primary">Create Shipment</Button>
        </Footer>
      </form>
    </Container>
  )
}