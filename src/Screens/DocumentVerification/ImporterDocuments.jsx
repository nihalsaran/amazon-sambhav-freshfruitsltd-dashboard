// src/components/ImporterDocuments.jsx
import styled from 'styled-components'
import { ChevronRight, FileText, File, Image } from 'lucide-react'
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  background: #f8f9fa;
  min-height: 100vh;
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  
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

const Banner = styled.div`
  background: #FFF3E0;
  color: #F59E0B;
  padding: 12px 24px;
  border-radius: 8px;
  margin-bottom: 24px;
  font-weight: 500;
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
`

const MetricCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

const MetricLabel = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`

const MetricValue = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${props => {
    switch(props.type) {
      case 'total': return '#0A2647';
      case 'pending': return '#F59E0B';
      case 'approved': return '#2ECC71';
      case 'rejected': return '#E74C3C';
      default: return '#333';
    }
  }};
`

const Table = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
  
  span {
    color: #666;
    font-size: 14px;
    font-weight: 500;
  }
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
`

const DocumentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    color: #666;
  }
`

const Status = styled.span`
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  
  ${props => {
    switch(props.status) {
      case 'Pending':
        return `
          background: #FFF3E0;
          color: #F59E0B;
        `;
      case 'Approved':
        return `
          background: #E8F5E9;
          color: #2ECC71;
        `;
      case 'Rejected':
        return `
          background: #FFEBEE;
          color: #E74C3C;
        `;
      default:
        return '';
    }
  }}
`

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`

const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  
  ${props => {
    switch(props.variant) {
      case 'view':
        return `
          background: #1877F2;
          color: white;
          
          &:hover {
            background: #1664d8;
          }
        `;
      case 'approve':
        return `
          background: #2ECC71;
          color: white;
          
          &:hover {
            background: #27AE60;
          }
        `;
      case 'reject':
        return `
          background: #E74C3C;
          color: white;
          
          &:hover {
            background: #C0392B;
          }
        `;
      default:
        return '';
    }
  }}
`

const ImporterName = styled.h1`
  font-size: 24px;
  color: #0A2647;
  margin-bottom: 24px;
`;

const getFileIcon = (fileName) => {
  if (fileName.endsWith('.pdf')) return <FileText size={20} />;
  if (fileName.endsWith('.docx')) return <File size={20} />;
  if (fileName.endsWith('.png')) return <Image size={20} />;
  return <File size={20} />;
}

export default function ImporterDocuments() {
  const location = useLocation();
  const importer = location.state?.importer;
  return (
    <Container>
      <Breadcrumb>
        <a href="#">Home</a>
        <ChevronRight size={16} />
        <a href="#">Importers</a>
        <ChevronRight size={16} />
        <span>Importer Co.</span>
      </Breadcrumb>
      
      <Banner>
        3 Pending Documents for Approval
      </Banner>

      <ImporterName>{importer?.name || 'Importer Co.'}</ImporterName>
      
      <MetricsGrid>
        <MetricCard>
          <MetricLabel>Total Documents Submitted</MetricLabel>
          <MetricValue type="total">12</MetricValue>
        </MetricCard>
        
        <MetricCard>
          <MetricLabel>Pending Approvals</MetricLabel>
          <MetricValue type="pending">5</MetricValue>
        </MetricCard>
        
        <MetricCard>
          <MetricLabel>Approved Documents</MetricLabel>
          <MetricValue type="approved">4</MetricValue>
        </MetricCard>
        
        <MetricCard>
          <MetricLabel>Rejected Documents</MetricLabel>
          <MetricValue type="rejected">3</MetricValue>
        </MetricCard>
      </MetricsGrid>
      
      <Table>
        <TableHeader>
          <span>Document Name</span>
          <span>Submission Date</span>
          <span>Status</span>
          <span>Actions</span>
        </TableHeader>
        
        <TableRow>
          <DocumentInfo>
            {getFileIcon('Document1.pdf')}
            <span>Document1.pdf</span>
          </DocumentInfo>
          <span>Nov 10, 2024</span>
          <Status status="Pending">Pending</Status>
          <ActionButtons>
            <Button variant="view">View</Button>
            <Button variant="approve">Approve</Button>
            <Button variant="reject">Reject</Button>
          </ActionButtons>
        </TableRow>
        
        <TableRow>
          <DocumentInfo>
            {getFileIcon('Document2.docx')}
            <span>Document2.docx</span>
          </DocumentInfo>
          <span>Nov 9, 2024</span>
          <Status status="Approved">Approved</Status>
          <ActionButtons>
            <Button variant="view">View</Button>
            <Button variant="approve">Approve</Button>
            <Button variant="reject">Reject</Button>
          </ActionButtons>
        </TableRow>
        
        <TableRow>
          <DocumentInfo>
            {getFileIcon('Document3.png')}
            <span>Document3.png</span>
          </DocumentInfo>
          <span>Nov 8, 2024</span>
          <Status status="Rejected">Rejected</Status>
          <ActionButtons>
            <Button variant="view">View</Button>
            <Button variant="approve">Approve</Button>
            <Button variant="reject">Reject</Button>
          </ActionButtons>
        </TableRow>
      </Table>
    </Container>
  )
}