import React, { useEffect, useState } from "react";
import Link from 'next/link';

import styles from './Header.module.css'
import NavBar from "./NavBar";


const Header = () => {

    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src="/images/logo_no_text2.png" alt="logo" />
            {/* <img className={styles.header__logo} src="/gifs/Spacemakers_Logo_anim__3.gif" alt="logo" /> */}
            <NavBar />
        </header>
    );
};

export default Header;