import React from "react";

import Head from 'next/head';

const metadata = {
    title: 'Spacemakers',
    description: 'Extending reality pixel by pixel',
    icon: '/favicon.ico',
    type: 'website',
    robots: 'follow, index',
    url: 'https://spacemakers.tv',
};

export default function RootLayout({ children }) {
    return (
        <React.Fragment>
            <Head>
                <title>Spacemakers</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:url" content={metadata.url} />
                <link rel="icon" href={metadata.icon} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJRZBZBZHT"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-ZJRZBZBZHT');
                    `
                }}>
                </script>


            </Head>
            {children}
        </React.Fragment>
    )
}