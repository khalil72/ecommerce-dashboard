import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Sidenav = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the token from sessionStorage
    sessionStorage.removeItem('token');
    navigate('/login')
    // Additional logout logic, e.g., redirecting to the login page
  };
  return (
    <div className='card bg-dark  p-4 rounded-0 text-white' style={{
      height: "100%",
      overflow: "auto",
      minHeight:'100vh'
    }}
    >
      <ul className="navbar-nav">
        <li className="nav-item pb-3">
          <a className="nav-link" href="#">
            <i className="bi bi-house"></i> Dashboard
          </a>
        </li>
        <li className="nav-item pb-3">
          <Link to="/dashboard/product" className="nav-link">
            product
          </Link>
        </li>
        <li className="nav-item pb-3">
          <Link to="/dashbaord/api/getdata" className="nav-link">
            Php_api
          </Link>
        </li>
    
        <li className="nav-item border-none bg-dark text-white cursor-pointer" onClick={handleLogout}>
          logout
        </li>
      </ul>
    </div>
  )
}

export default Sidenav