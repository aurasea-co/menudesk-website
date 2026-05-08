// Root layout is handled per-locale; this file is required by Next.js App Router.
// All real layout logic lives in app/[locale]/layout.tsx.
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
