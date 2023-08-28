import React from "react";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from "../components/Header/Header";

import styles from "./about.module.css";

const About = () => {
    return (
        <div>
            <Header />
            <div className={styles.about_container}>
                <Container className={styles.about_image}>
                    <h3>THIS IS</h3>
                    <h2>SPACEMAKERS</h2>
                    <img src="/images/logo_no_text2.png" alt="logo" />
                </Container>
                <Container className={styles.about_text}>
                    Spacemakers is a project started by a local youth house (Krak)
                    in a small town called Avelgem, Belgium.
                    The project purely grew on a voluntary basis with all members
                    develloping their own expertise in their field of interest.
                    This created a group of young, motivated creators with a skill
                    set ranging from projection mapping, animation, stage design
                    to software development, electronics, generative art and so much more.

                    <br/>
                    <br/>

                    With Spacemakers we have been experimenting with light,
                    image and sound in public space forabout 8 years now.
                    Through different art forms we try to show a space in another dimension.
                    Imagination is therefore always central.
                    We are not afraid of a challenge, we even like to embrace it.
                    Our portfolio now includes various exhibitions, video mappings,
                    video projection, stage design, light constructions,
                    (interactive) installations and numerous workshops.
                </Container>
            </div>
        </div>
    );
};
export default About;