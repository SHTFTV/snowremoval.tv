import type { Metadata } from 'next';
import './globals.css';
import './extras.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://snowremoval.tv'),
  title: { default: 'Snow Removal TV | Lower Mainland Snow Removal Guides', template: '%s | Snow Removal TV' },
  description: 'Snow removal guides, equipment requests and local service information for Vancouver, the Lower Mainland and Fraser Valley. Connect with PlowWow.',
  openGraph: { title: 'Snow Removal TV', description: 'Local snow-removal information and storm-ready service connections.', images: ['/images/plowwow-og.jpg'], type: 'website' },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
