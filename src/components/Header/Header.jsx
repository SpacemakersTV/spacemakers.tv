import React from "react";

import styles from './Header.module.css'
import NavBar from "./NavBar";

const Header = () => {

    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src="/images/logo_no_text2.png" alt="logo" />
            <NavBar />
        </header>
    );
};

export default Header;