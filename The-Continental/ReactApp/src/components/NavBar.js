import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({getLogin, getReg}) {
  return (
    <div className='navv'>
      <nav className="navbar navbar-expand-lg"  data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">The Continental</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <div className="nav-link" onClick={getLogin}> login </div>
                </li>
                <li className="nav-item">
                <div className="nav-link" onClick={getReg}> Register </div>
                </li>
                <div className='user'><h2><FontAwesomeIcon icon={faUser} /> {localStorage.getItem('usname')}</h2></div>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
