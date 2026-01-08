import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './styles/SignUpPage.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match! ');
      return;
    }
    
    setError('');
    
    localStorage.setItem('user', email);
    localStorage.setItem('username', username);
    
    navigate('/dashboard');
  };

  return (
    <main>
      <div className="signup-container">
        <h1>Sign Up</h1>
        
        {error && <p className="error">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='username'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='username'
            required
          />
          
          <input 
            type="email" 
            name='email'
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            required
          />
          
          <input 
            type="password" 
            name='password'
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='new-password'
            required
          />
          
          <input 
            type="password" 
            name='confirmPassword'
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete='new-password'
            required
          />
          
          <button type="submit">Sign Up</button>
        </form>
        
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;