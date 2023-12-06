import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [username , setName] = useState('');
  const  [password ,setPassword] = useState('');
  const navigate = useNavigate();
  const handleName = (e) =>{
    setName(e.target.value);
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }
  const onSubmit =async (e) => {
    e.preventDefault();
    // console.log(username , password);
    setName('');
    setPassword('');
    const userData ={
      username:username,
      password:password,
    }
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        console.log('Network error or invalid credentials');
        alert('Invalid username or password');
        return;
      }
  
      const data = await response.json();
      const { token } = data;
  
      if (!token) {
        console.log('Token not received in the response');
        return;
      }
  
      // Store the token in sessionStorage
      sessionStorage.setItem('token', token);
  
      // Decode and log the token for debugging (optional)
      try {
        const decodedToken = atob(token.split('.')[1]);
        console.log('Decoded token:', decodedToken);
      } catch (decodeError) {
        console.error('Error decoding token:', decodeError);
      }
  
      // Navigate to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  return (
    <div className="container-fluid h-100 pt-5 mt-5 align-items-center">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    name ={username}
                    value={username}
                    onChange ={handleName}
                  />
                  
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Your password"
                    required
                    name={password}
                    onChange ={handlePassword}
                    value={password}
                  />
                  
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login