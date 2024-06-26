import { Inter } from 'next/font/google';
import './globals.scss';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_APP_NAME
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
