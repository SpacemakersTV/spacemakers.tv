import React , {useState, useEffect} from "react"

import RootLayout from "@/components/RootLayout"
import Header from "@/components/Header/Header"

import styles from '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch(`/api/getSiteData`)
            .then(response => response.json())
            .then(data => {
                setProjects(data["data"]);
                setTags(data['tags']);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            })
    }, []);


    return (
        <RootLayout>
            <Header />
            <Component {...pageProps} projects={projects} tags={tags} />
        </RootLayout>
    )
}