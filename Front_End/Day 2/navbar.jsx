
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const styles = {
        navbar: {
            position: 'fixed',
            backgroundImage: `url('https://t4.ftcdn.net/jpg/06/63/15/09/240_F_663150974_zGvyupRRWmtlap7EhRmaEZohbvB3PHBR.jpg')`,
            backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",

            top: 0,
            left: 0,
            width: '100%',
            border: '1px outset rgba(192, 192, 192, 0.5)',
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.3)',
            fontFamily: '"Lato", "Helvetica Neue", Helvetica, Arial, sans-serif',
            zIndex: 1000,
            padding: '15px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        link: {
            color: '#000',
            fontWeight: 700,
            fontSize: '16px',
            textDecoration: 'none',
            padding: '15px 20px',
            display: 'inline-block',
        },
        toggleButton: {
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#fff', // Change the text color for the dropdown button
        },
        dropdown: {
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)', // Change this color to your preference
            border: '1px outset rgba(192, 192, 192, 0.5)',
            boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.3)',
            display: isDropdownOpen ? 'block' : 'none',
            zIndex: 1001, // Ensure dropdown is above other elements
        },
        dropdownLink: {
            color: '#fff', // Change the text color for dropdown links
            textDecoration: 'none',
            padding: '10px',
            display: 'block',
        },
        menuList: {
            listStyle: 'none',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
        },
        menuItem: {
            marginRight: '10px',
        },
    };

    return (
        <nav style={styles.navbar}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={styles.toggleButton} onClick={toggleDropdown}>
                    &#9776; {/* This is the hamburger icon for the toggle button */}
                </div>
                {isDropdownOpen && (
                    <div style={styles.dropdown}>
                       <Link to='/login'>Login</Link>
                        <a href="#" style={styles.dropdownLink}>
                            Profile
                        </a>
                        <a href="#" style={styles.dropdownLink}>
                            Payment
                        </a>
                    </div>
                )}
                <a href="#" style={{ ...styles.link, marginRight: '20px' }}>
                    Panda Events
                </a>
            </div>
            <ul style={styles.menuList}>
                <li style={styles.menuItem}>
                    <a href="#" style={styles.link}>
                        Home
                    </a>
                </li>
                <li style={styles.menuItem}>
                    <a href="#" style={styles.link}>
                        About
                    </a>
                </li>
                <li style={styles.menuItem}>
                    <a href="#" style={styles.link} onClick={toggleDropdown}>
                        Events
                    </a>
                </li>
                <li>
                    <a href="#" style={styles.link}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

