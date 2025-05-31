import type { Metadata } from "next";
import "./globals.css";
import Layout from '@/components/Layout'; // Import the new Layout component

export const metadata: Metadata = {
  title: 'Sougwen Chung Portfolio',
  description: 'Exploring art, technology, and relational systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
