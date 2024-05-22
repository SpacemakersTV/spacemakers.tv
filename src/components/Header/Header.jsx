import React from "react";

import { useRouter } from "next/router";

import styles from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
	const router = useRouter();

	const goHome = () => {
		router.push("/");
	};

	return (
		<header className={styles.header}>
			<img
				className={styles.header__logo}
				src="/gifs/Spacemakers_Logo_anim__1.gif"
				alt="logo"
				onClick={goHome}
			/>
			<NavBar />
		</header>
	);
};

export default Header;
