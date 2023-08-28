import React from 'react';

import Link from 'next/link'

import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={styles.header__nav}>
                <ul className={styles.header__nav_list}>
                    <li className={styles.header__nav_item}>
                        <Link href="/#" className={styles.header__nav_link}>HOME</Link>
                    </li>
                    <li className={styles.header__nav_item}>
                        <Link href="/work" className={styles.header__nav_link}>WORK</Link>
                    </li>
                    <li className={styles.header__nav_item}>
                        <Link href="/about" className={styles.header__nav_link}>ABOUT</Link>
                    </li>
                    <li className={styles.header__nav_item}>
                        <Link href="/shop" className={styles.header__nav_link}>SHOP</Link>
                    </li>
                    <li className={styles.header__nav_item}>
                        <Link href="/contact" className={styles.header__nav_link}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default NavBar;
