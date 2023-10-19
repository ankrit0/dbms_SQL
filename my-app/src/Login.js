import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = {
        username: username,
        password: password
      };
  
      const response = await axios.post('http://localhost:3036/api/auth/login', data);
  
      alert("Login successful")
      console.log(response.data.message); 
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
        console.error('Error logging in:', error.response.data.message);
      } else {
        console.log(error.message)
        console.error('An error occurred:', error.message);
      }
    }
  };
  const handleRegister = async () => {
    try {
      const data = {
        username: username,
        password: password
      };
  
      const response = await axios.post('http://localhost:3036/api/auth/register', data);
      alert("Registered successful")
      console.log(response.data.message);
    } catch (error) {
      if (error.response) {
        console.error('Error logging in:', error.response.data.message);
        alert(error.response.data.message)
      } else {
        console.error('An error occurred:', error.message);
        alert(error.message)
      }
    }
  };

  const handleDelete = async () => {
    try {
      const data = {
        username: username,
        password: password
      };
  
      const response = await axios.post('http://localhost:3036/api/auth/delete', data);
      alert("Deleted successful")
      console.log(response.data.message);
    } catch (error) {
      if (error.response) {
        console.error('Error logging in:', error.response.data.message);
      } else {
        console.error('An error occurred:', error.message);
      }
    }
  };

  const handleReset = async () => {
    try {
      const data = {
        username: username,
        password: password
      };
  
      const response = await axios.post('http://localhost:3036/api/auth/resetpassword', data);
      alert("Reset successful")
      console.log(response.data.message);

      console.log(response.data.message);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        console.error('Error logging in:', error.response.data.message);
      } else {
        console.error('An error occurred:', error.message);
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', width: '300px' }}>
        <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>Login Form</h2>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button style={{ color: '#fff', backgroundColor: '#007bff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleLogin}>Login</button>
          <button style={{ color: '#fff', backgroundColor: '#28a745', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleRegister}>Register</button>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button style={{ color: '#333', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} onClick={handleReset}>Reset Password</button>
          <button style={{ color: '#333', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginLeft: '10px' }} onClick={handleDelete}>Delete Account</button>
        </div>
      </div>
    </div>
  

  );
};

export default Login;
