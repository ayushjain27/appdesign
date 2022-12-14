import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';

const Navbar = (props) => {

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    const handleLogOut = (e) => {
            e.preventDefault();
                props.showAlert("You have logout you screen", "success");
                localStorage.removeItem('token')
                navigate('/login');
    }

    return (
        <>
            <style jsx='true'>
                {`
                    .active {
                        color: #6c757d !important;
                        font-weight: bold !important;
                        border-bottom: 3px solid #6c757d !important;
                    }

                    .button {
                        border-radius : 0;
                    }
                `}
            </style>

            <nav className={`${styles.navbar} navbar navbar-expand-lg bg-white sticky-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" to="/">
                        Shiv Dhara Telecom
                    </Link>
                    <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                        {
                            toggle ? <FaTimes className='text-dark' /> : <FaBars className='text-dark' />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5 gap-2 mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeclassname='active' onClick={handleClick} className={`${styles.navLink} nav-link`} to="/">Dashboard</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} aria-current="page" to="/display">Display Page</NavLink>
                            </li>
                        </ul>
                        <div className={`${styles.buttons} d-flex gap-2`}>
                            <button onClick={() => navigate('/searchbar')} className={`${styles.search}`}>
                                <FaSearch className='fs-4' />
                            </button>
                            <button onClick={() => navigate('/login')} className={`${styles.login} btn btn-warning`}>Login</button>
                            <button onClick={handleLogOut} className="btn btn-danger">LogOut</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;