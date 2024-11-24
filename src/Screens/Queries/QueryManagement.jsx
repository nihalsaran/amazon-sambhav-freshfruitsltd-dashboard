// src/components/QueryManagement.jsx
import styled from 'styled-components'
import { Search, Eye, RotateCcw, ChevronDown } from 'lucide-react'
import { PieChart } from '../../Components/charts/PieChart';
import { BarChart } from '../../Components/charts/BarChart';

const Container = styled.div`
  padding: 20px;
  background: #f8f9fa;
  min-height: 100vh;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`

const Title = styled.h1`
  font-size: 24px;
  color: #0A2647;
  margin: 0;
`

const SearchSection = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
`

const SearchBar = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  
  input {
    width: 100%;
    padding: 8px 16px 8px 36px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #1877F2;
    }
  }
  
  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }
`

const FilterSelect = styled.div`
  position: relative;
  
  select {
    appearance: none;
    padding: 8px 32px 8px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: 14px;
    background: white;
    cursor: pointer;
    min-width: 120px;
    
    &:focus {
      outline: none;
      border-color: #1877F2;
    }
  }
  
  svg {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #666;
  }
`

const NewQueryButton = styled.button`
  background: #1877F2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background: #1664d8;
  }
`

const Table = styled.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  border-collapse: collapse;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

const Th = styled.th`
  text-align: left;
  padding: 16px;
  font-size: 14px;
  color: #666;
  border-bottom: 2px solid #e0e0e0;
`

const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  border-bottom: 1px solid #e0e0e0;
  vertical-align: middle;
`

const ImporterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 20px;
    height: 20px;
    opacity: 0.6;
  }
`

const Badge = styled.span`
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  
  ${props => {
        switch (props.variant) {
            case 'high':
                return `
          background: #FFEBEE;
          color: #E74C3C;
        `;
            case 'medium':
                return `
          background: #FFF3E0;
          color: #F59E0B;
        `;
            case 'low':
                return `
          background: #E8F5E9;
          color: #2ECC71;
        `;
            case 'open':
                return `
          background: #FFF3E0;
          color: #F59E0B;
        `;
            case 'in-progress':
                return `
          background: #E3F2FD;
          color: #1877F2;
        `;
            case 'resolved':
                return `
          background: #E8F5E9;
          color: #2ECC71;
        `;
            default:
                return '';
        }
    }}
`

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  
  button {
    background: none;
    border: none;
    padding: 4px;
    color: #666;
    cursor: pointer;
    
    &:hover {
      color: #1877F2;
    }
  }
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  margin-bottom: 24px;
`

const MetricsCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  
  h2 {
    font-size: 18px;
    color: #0A2647;
    margin-bottom: 16px;
  }
`

const MetricsList = styled.div`
  display: grid;
  gap: 12px;
  
  div {
    font-size: 14px;
    color: #666;
    
    strong {
      color: #333;
      margin-left: 8px;
    }
  }
`

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 16px;
`

const DownloadButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #1877F2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 16px;
  
  &:hover {
    background: #1664d8;
  }
`

const Footer = styled.footer`
  padding: 16px 0;
  color: #666;
  font-size: 14px;
  border-top: 1px solid #e0e0e0;
`

export default function QueryManagement() {
    const chartData = [
        { label: 'Open', value: 5 },
        { label: 'In Progress', value: 7 },
        { label: 'Resolved', value: 3 }
    ];
    return (
        <Container>
            <Header>
                <Title>Query Management</Title>
                <SearchSection>
                    <SearchBar>
                        <Search size={16} />
                        <input type="text" placeholder="Search queries..." />
                    </SearchBar>

                    <FilterSelect>
                        <select defaultValue="">
                            <option value="" disabled>Status</option>
                            <option>Open</option>
                            <option>In Progress</option>
                            <option>Resolved</option>
                        </select>
                        <ChevronDown size={16} />
                    </FilterSelect>

                    <FilterSelect>
                        <select defaultValue="">
                            <option value="" disabled>Priority</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                        <ChevronDown size={16} />
                    </FilterSelect>

                    <FilterSelect>
                        <select defaultValue="">
                            <option value="" disabled>Category</option>
                            <option>Shipping</option>
                            <option>Documentation</option>
                            <option>Pricing</option>
                        </select>
                        <ChevronDown size={16} />
                    </FilterSelect>

                    <NewQueryButton>New Query</NewQueryButton>
                </SearchSection>
            </Header>

            <Table>
                <thead>
                    <tr>
                        <Th>Query ID</Th>
                        <Th>Importer Name</Th>
                        <Th>Category</Th>
                        <Th>Priority</Th>
                        <Th>Status</Th>
                        <Th>Last Updated</Th>
                        <Th>Actions</Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Td>Q00123</Td>
                        <Td>
                            <ImporterInfo>
                                <Avatar>
                                    <img src="/placeholder.svg" alt="Global Fruits Inc." />
                                </Avatar>
                                <span>Global Fruits Inc.</span>
                            </ImporterInfo>
                        </Td>
                        <Td>Shipping</Td>
                        <Td><Badge variant="high">High</Badge></Td>
                        <Td><Badge variant="open">Open</Badge></Td>
                        <Td>2023-10-05 14:30</Td>
                        <Td>
                            <ActionButtons>
                                <button><Eye size={18} /></button>
                                <button><RotateCcw size={18} /></button>
                            </ActionButtons>
                        </Td>
                    </tr>
                    <tr>
                        <Td>Q00124</Td>
                        <Td>
                            <ImporterInfo>
                                <Avatar>
                                    <img src="/placeholder.svg" alt="Tropical Imports LLC" />
                                </Avatar>
                                <span>Tropical Imports LLC</span>
                            </ImporterInfo>
                        </Td>
                        <Td>Pricing</Td>
                        <Td><Badge variant="medium">Medium</Badge></Td>
                        <Td><Badge variant="in-progress">In Progress</Badge></Td>
                        <Td>2023-10-05 13:45</Td>
                        <Td>
                            <ActionButtons>
                                <button><Eye size={18} /></button>
                                <button><RotateCcw size={18} /></button>
                            </ActionButtons>
                        </Td>
                    </tr>
                    <tr>
                        <Td>Q00125</Td>
                        <Td>
                            <ImporterInfo>
                                <Avatar>
                                    <img src="/placeholder.svg" alt="Fruit Express Co." />
                                </Avatar>
                                <span>Fruit Express Co.</span>
                            </ImporterInfo>
                        </Td>
                        <Td>Documentation</Td>
                        <Td><Badge variant="low">Low</Badge></Td>
                        <Td><Badge variant="resolved">Resolved</Badge></Td>
                        <Td>2023-10-04 16:50</Td>
                        <Td>
                            <ActionButtons>
                                <button><Eye size={18} /></button>
                                <button><RotateCcw size={18} /></button>
                            </ActionButtons>
                        </Td>
                    </tr>
                </tbody>
            </Table>

            <MetricsGrid>
                <MetricsCard>
                    <h2>Overview Metrics</h2>
                    <MetricsList>
                        <div>Total Queries:<strong>15</strong></div>
                        <div>Open Queries:<strong>5</strong></div>
                        <div>In Progress Queries:<strong>7</strong></div>
                        <div>Resolved Queries:<strong>3</strong></div>
                    </MetricsList>
                </MetricsCard>

                <MetricsCard>
                    <h2>Query Distribution</h2>
                    <ChartContainer>
                        <div className="pie-chart">
                            <PieChart data={chartData} />
                        </div>
                        <div className="bar-chart">
                            <BarChart data={chartData} />
                        </div>
                    </ChartContainer>
                    <DownloadButton>Download Report</DownloadButton>
                </MetricsCard>
            </MetricsGrid>

            <Footer>
                © 2023 FreshFruits Ltd. All rights reserved.
            </Footer>
        </Container>
    )
}