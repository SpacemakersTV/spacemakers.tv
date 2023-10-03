import React from "react";

import Header from "@/components/Header/Header";
import styles from "./404.module.css";


export default function Custom404() {
    return (
        <div>

            <Header />
            <div className={styles.container}>
                <img src="/images/logo_no_text2.png" alt="404" />
                <h1>Sorry, i can't find that page</h1>
            </div>  
        </div>
    );

} 