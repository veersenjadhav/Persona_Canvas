import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Persona Canvas',
  description: 'My Professional CV and Bio',
};

const favicon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <rect width="32" height="32" rx="6" fill="hsl(227 29% 26%)" />
    <text
      x="50%"
      y="50%"
      dominant-baseline="central"
      text-anchor="middle"
      fill="hsl(210 40% 98%)"
      font-size="16"
      font-family="Space Grotesk, sans-serif"
      font-weight="bold"
    >
      VJ
    </text>
  </svg>
`;

const faviconDataUrl = `data:image/svg+xml,${encodeURIComponent(favicon)}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href={faviconDataUrl} type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
