// src/components/LandingPage.jsx
import styled from 'styled-components'
import { MessageCircle, FolderOpen, HelpCircle, BarChart2, Globe } from 'lucide-react'
import heroImage from './Image.jpg';
import { useNavigate } from 'react-router-dom';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0A2647;
  
  svg {
    color: #1877F2;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    color: #1877F2;
  }
`

const LoginButton = styled.button`
  background: #1877F2;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:hover {
    background: #1664d8;
  }
`

const HeroSection = styled.section`
  margin-top: 64px;
  position: relative;
  text-align: center;
  padding: 4rem 1rem;
`

const HeroImage = styled.img`
  width: 100%;
  max-width: 1300px;
  height: auto;
  border-radius: 8px;
  margin: 2rem auto;
`

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #0A2647;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`

const GetStartedButton = styled.button`
  background: #1877F2;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background: #1664d8;
  }
`

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #0A2647;
  margin-bottom: 3rem;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  
  svg {
    width: 48px;
    height: 48px;
    color: #1877F2;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.2rem;
    color: #0A2647;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
`

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  p {
    color: #333;
    font-style: italic;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  cite {
    color: #666;
    font-style: normal;
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`

const Footer = styled.footer`
  background: white;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #eee;
  
  div {
    margin-bottom: 1rem;
    
    a {
      color: #666;
      text-decoration: none;
      margin: 0 1rem;
      font-size: 0.9rem;
      
      &:hover {
        color: #1877F2;
      }
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: #666;
    
    &:hover {
      color: #1877F2;
    }
  }
`

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <>
            <NavBar>
                <Logo>
                    <Globe />
                    ExportEase
                </Logo>
                <NavLinks>
                    <LoginButton onClick={() => navigate('/login')}>
                        Login/Signup
                    </LoginButton>
                </NavLinks>
            </NavBar>

            <HeroSection>
                <HeroTitle>Simplify Global Trade for Indian SMBs</HeroTitle>
                <HeroSubtitle>
                    Empower your exports with seamless coordination and compliance tools
                </HeroSubtitle>
                <GetStartedButton>Get Started</GetStartedButton>
                <HeroImage
                    src={heroImage}
                    alt="Container ship loaded with cargo containers"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'fallback-image.jpg'; // Optional fallback
                    }}
                />
            </HeroSection>

            <FeaturesSection>
                <SectionTitle>Our Features</SectionTitle>
                <FeaturesGrid>
                    <FeatureCard>
                        <MessageCircle />
                        <h3>Real-Time Communication</h3>
                        <p>Stay connected with your team and clients across borders with our instant messaging tools.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <FolderOpen />
                        <h3>Document Management</h3>
                        <p>Easily manage and access important documents with our secure cloud storage solutions.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <HelpCircle />
                        <h3>Query Resolution</h3>
                        <p>Quickly resolve queries with our dedicated support team available 24/7.</p>
                    </FeatureCard>

                    <FeatureCard>
                        <BarChart2 />
                        <h3>Analytics</h3>
                        <p>Gain insights into your export operations with our advanced analytics tools.</p>
                    </FeatureCard>
                </FeaturesGrid>
            </FeaturesSection>

            <TestimonialsSection>
                <SectionTitle>Testimonials</SectionTitle>
                <TestimonialsGrid>
                    <TestimonialCard>
                        <p>"ExportEase has transformed our export process, making it more efficient and worry-free."</p>
                        <cite>— Ramesh Gupta, Textile Exporter</cite>
                    </TestimonialCard>

                    <TestimonialCard>
                        <p>"The real-time communication feature is a game-changer for our business operations."</p>
                        <cite>— Anjali Mehta, Handicrafts Distributor</cite>
                    </TestimonialCard>

                    <TestimonialCard>
                        <p>"With ExportEase, we have enhanced compliance and streamlined our document management."</p>
                        <cite>— Sandeep Verma, Electronics Manufacturer</cite>
                    </TestimonialCard>
                </TestimonialsGrid>
            </TestimonialsSection>

            <Footer>
                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <SocialLinks>
                    <a href="#" aria-label="Facebook">f</a>
                    <a href="#" aria-label="Twitter">t</a>
                    <a href="#" aria-label="LinkedIn">in</a>
                </SocialLinks>
            </Footer>
        </>
    )
}