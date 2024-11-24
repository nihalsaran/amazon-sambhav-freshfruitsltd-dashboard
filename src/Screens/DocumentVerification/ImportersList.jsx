// src/components/ImportersList.jsx
import styled from 'styled-components'
import { ChevronDown } from 'lucide-react'

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

const SearchBar = styled.input`
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  width: 300px;
  font-size: 14px;
  
  &::placeholder {
    color: #9e9e9e;
  }
`

const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #f5f5f5;
  }
`

const AddButton = styled.button`
  background: #1877F2;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #1664d8;
  }
`

const Table = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
  
  span {
    color: #666;
    font-size: 14px;
    font-weight: 500;
  }
`

const ImporterRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
`

const ImporterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0A2647;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`

const Badge = styled.span`
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  background: ${props => props.type === 'pending' ? '#FFF3E0' : '#E8F5E9'};
  color: ${props => props.type === 'pending' ? '#F59E0B' : '#2ECC71'};
`

const importers = [
  {
    initials: 'AB',
    name: 'Alpha Imports',
    pending: 5,
    approved: 15
  },
  {
    initials: 'BZ',
    name: 'Beta Zone Ltd.',
    pending: 3,
    approved: 8
  },
  {
    initials: 'CS',
    name: 'Cargo Solutions',
    pending: 7,
    approved: 10
  },
  {
    initials: 'DT',
    name: 'Delta Traders',
    pending: 4,
    approved: 12
  }
]

export default function ImportersList() {
  return (
    <Container>
      <Header>
        <SearchBar 
          type="text" 
          placeholder="Search for importers..."
        />
        <HeaderActions>
          <FilterButton>
            Pending Documents
            <ChevronDown size={16} />
          </FilterButton>
          <AddButton>Add Importer</AddButton>
        </HeaderActions>
      </Header>
      
      <Table>
        <TableHeader>
          <span>Importer Name</span>
          <span>Pending Documents</span>
          <span>Approved Documents</span>
        </TableHeader>
        
        {importers.map((importer, index) => (
          <ImporterRow key={index}>
            <ImporterInfo>
              <Avatar>{importer.initials}</Avatar>
              <span>{importer.name}</span>
            </ImporterInfo>
            <Badge type="pending">
              {importer.pending} Pending
            </Badge>
            <Badge type="approved">
              {importer.approved} Approved
            </Badge>
          </ImporterRow>
        ))}
      </Table>
    </Container>
  )
}