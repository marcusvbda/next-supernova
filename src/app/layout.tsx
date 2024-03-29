import { Inter } from 'next/font/google';
import './globals.scss';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Supernova',
    description: 'A simple and fast static site generator.'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={inter.className}>
                {children}
            </body>
        </html>
    );
}
