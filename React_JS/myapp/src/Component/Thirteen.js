import React, { useState } from 'react';
import '../CSS/Thirteen.css';

export default function Thirteen() {
  // States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuthentication = () => {
    if (isRegistered) {
      // Login
      const user = users.find((u) => u.email === email && u.password === password);
      if (user) {
        setIsLogin(true);
      } else {
        alert('Login Failed! Please check the password');
      }
    } else {
      // Register
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <div className="container">
      {isLogin ? (
        <div className="form">
          <h2>Welcome, {email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? 'Login Page' : 'Register Page'}</h2>
          <form>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="button" onClick={handleAuthentication}>
              {isRegistered ? 'Login' : 'Register'}
            </button>
          </form>
          <p>
            {isRegistered ? "Don't have an account " : 'Already have an account'}
            <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
