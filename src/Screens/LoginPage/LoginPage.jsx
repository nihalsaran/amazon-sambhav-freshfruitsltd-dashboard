import styled from 'styled-components'
import { useState } from 'react'
import backgroundImage from './fruit-export.jpeg' // You'll need to add your image
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const LoginPage = styled.div`
  display: flex;
  min-height: 100vh;
`

const LeftSection = styled.div`
  flex: 1;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
`

const Logo = styled.div`
  padding: 20px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`

const Testimonial = styled.div`
  position: absolute;
  bottom: 40px;
  left: 30px;
  right: 30px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`

const RightSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
`

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #0A2647;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Link = styled.a`
  color: #0066cc;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #2ECC71;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  
  &:hover {
    background-color: #27AE60;
  }
`

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.bgColor};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LanguageSelector = styled.select`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
`

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Add this
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect after successful login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginPage>
      <LeftSection>
        <Logo>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
          Fresh Fruits LTD
        </Logo>
        <Testimonial>
          "The best export service we've ever used! Highly recommended for
          efficiency and reliability." - John Smith, CEO of Global Exports
        </Testimonial>
      </LeftSection>

      <RightSection>
        <LoginForm onSubmit={handleSubmit}>
          <Title>Welcome back!</Title>

          {error && (
            <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
          )}

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <div style={{ position: "relative" }}>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </FormGroup>

          <RememberForgot>
            <CheckboxLabel>
              <input type="checkbox" />
              Remember me
            </CheckboxLabel>
            <Link href="#">Forgot password?</Link>
          </RememberForgot>

          <LoginButton
            type="submit"
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Logging in..." : "Login"}
          </LoginButton>

          {/* <div style={{ textAlign: 'center' }}>
            <Link href="#">Sign up</Link>
          </div> */}
          <SocialButtons>
            <SocialButton bgColor="#1877F2">f</SocialButton>
            <SocialButton bgColor="#1DA1F2">t</SocialButton>
          </SocialButtons>
        </LoginForm>

        <LanguageSelector>
          <option>English</option>
        </LanguageSelector>
      </RightSection>
    </LoginPage>
  );
}