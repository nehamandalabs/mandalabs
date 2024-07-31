import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DrawerPage } from '../components/drawepage/DrawerPage'
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mandalabs',
    description: 'Technology Strategy Partnership',
    icons : "./logowhite.png"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

            <body className={inter.className + ' m-auto w-full '}>
                <Header />
                <DrawerPage />
                {children}
                <Footer />
            </body>

        </html>
    )
}
