import "@/app/ui/global.css";
import { inter } from '@/app/ui/fonts';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template:"%s | HasH Dashboard - Bellary",
    default: 'Hash Dashgoard - Bellary'
  },
  description: 'The Next.js Course Dashboard, Built with App router, based in Bellary Karnataka, India',
  metadataBase: new URL('https://nextjs-dashboard-amber-eight-53.vercel.app/')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
