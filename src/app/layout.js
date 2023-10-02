import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spacemakers',
  description: 'Spacemakers: Extending reality, pixel by pixel',
  icons: {
    appleTouchIcon: '/apple-touch-icon.png',
    favicon32: '/favicon-32x32.png',
    favicon16: '/favicon-16x16.png',
    // manifest: '/site.webmanifest',
    // maskIcon: '/safari-pinned-tab.svg',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
