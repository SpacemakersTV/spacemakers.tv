import React, { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = (props) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <nav className={styles.header__nav}>
            <div className={styles.header__mobile_toggle} onClick={toggleMobileNav}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            
            <ul className={`${styles.header__nav_list} ${mobileNavOpen ? styles.active : ''}`}>
                <li className={styles.header__nav_item}>
                    <Link href="/" className={styles.header__nav_link}>HOME</Link>
                </li>
                <li className={styles.header__nav_item}>
                    <Link href="/work" className={styles.header__nav_link}>WORK</Link>
                </li>
                <li className={styles.header__nav_item}>
                    <Link href="/about" className={styles.header__nav_link}>ABOUT</Link>
                </li>
                {/* <li className={styles.header__nav_item}>
                    <Link href="/shop" className={styles.header__nav_link}>SHOP</Link>
                </li> */}
                <li className={styles.header__nav_item}>
                    <Link href="/contact" className={styles.header__nav_link}>CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

