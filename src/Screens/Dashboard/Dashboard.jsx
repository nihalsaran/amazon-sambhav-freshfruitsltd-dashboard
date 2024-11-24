// src/components/Dashboard.jsx
import styled from 'styled-components'
import { Bell, Mail, Search, ChevronDown } from 'lucide-react'

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: white;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: #0A2647;
  
  svg {
    width: 24px;
    height: 24px;
    color: #1877F2;
  }
`

const SearchBar = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 20px;
  
  input {
    width: 100%;
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  position: relative;
  
  &:hover {
    color: #333;
  }
`

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`

const MetricCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`

const MetricTitle = styled.h3`
  color: #0A2647;
  font-size: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MetricValue = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.color || '#333'};
`

const MetricChange = styled.div`
  font-size: 14px;
  color: ${props => props.isPositive ? '#2ECC71' : '#E74C3C'};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
`

const MapSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  
  h2 {
    color: #0A2647;
    margin-bottom: 16px;
  }
`

const WorldMap = styled.div`
  background: #0A2647;
  height: 400px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

const Section = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  
  h2 {
    color: #0A2647;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const RefreshButton = styled.button`
  background: ${props => props.variant === 'primary' ? '#1877F2' : '#2ECC71'};
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    opacity: 0.9;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
  }
`

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header>
        <Logo>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
          Export Ease
        </Logo>
        
        <SearchBar>
          <input type="text" placeholder="Search..." />
        </SearchBar>
        
        <HeaderActions>
          <IconButton>
            <Bell size={20} />
          </IconButton>
          <IconButton>
            <Mail size={20} />
          </IconButton>
          <ProfileSection>
            <Avatar src="/placeholder.svg" alt="Profile" />
            <ChevronDown size={20} />
          </ProfileSection>
        </HeaderActions>
      </Header>

      <MetricsGrid>
        <MetricCard>
          <MetricTitle>
            Active Shipments
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
            </svg>
          </MetricTitle>
          <MetricValue>1,024</MetricValue>
          <MetricChange isPositive>+8% from last month</MetricChange>
        </MetricCard>

        <MetricCard>
          <MetricTitle>
            Pending Queries
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </MetricTitle>
          <MetricValue color="#F1C40F">256</MetricValue>
          <MetricChange isPositive={false}>-5% from last month</MetricChange>
        </MetricCard>

        <MetricCard>
          <MetricTitle>
            Monthly Revenue
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
          </MetricTitle>
          <MetricValue color="#1877F2">$1.2M</MetricValue>
          <MetricChange isPositive>+12% from last month</MetricChange>
        </MetricCard>

        <MetricCard>
          <MetricTitle>
            Compliance Score
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
          </MetricTitle>
          <MetricValue color="#2ECC71">96%</MetricValue>
          <MetricChange isPositive>+3% from last month</MetricChange>
        </MetricCard>
      </MetricsGrid>

      <MapSection>
        <h2>Interactive World Map</h2>
        <WorldMap>
          <img src="/placeholder.svg" alt="World Map" />
        </WorldMap>
      </MapSection>

      <GridLayout>
        <Section>
          <h2>
            Upcoming Shipments
            <RefreshButton variant="primary">Refresh</RefreshButton>
          </h2>
          <List>
            <li>Shipment #2345 - New York to London - ETA: 3 days</li>
            <li>Shipment #2346 - Tokyo to Sydney - ETA: 5 days</li>
            <li>Shipment #2347 - Berlin to Paris - ETA: 2 days</li>
          </List>
        </Section>

        <Section>
          <h2>
            Document Approval Queue
            <RefreshButton variant="primary">Refresh</RefreshButton>
          </h2>
          <List>
            <li>Invoice #789 - Pending Approval</li>
            <li>Bill of Lading #456 - Requires Signature</li>
            <li>Customs Declaration #123 - Approved</li>
          </List>
        </Section>

        <Section>
          <h2>
            Weather Alerts
            <RefreshButton>Refresh</RefreshButton>
          </h2>
          <List>
            <li>Storm Alert - Pacific Ocean</li>
            <li>Heavy Rainfall - Southeast Asia</li>
            <li>High Winds - Gulf of Mexico</li>
          </List>
        </Section>

        <Section>
          <h2>
            Recent Activity
            <RefreshButton>Refresh</RefreshButton>
          </h2>
          <List>
            <li>User John Smith updated Shipment #2345</li>
            <li>New document uploaded for Invoice #789</li>
            <li>Alert: New customs regulation in effect</li>
          </List>
        </Section>
      </GridLayout>
    </DashboardContainer>
  )
}