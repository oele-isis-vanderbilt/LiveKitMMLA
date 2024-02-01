import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | LiveKit ELP',
    default: 'LiveKit ELP',
  },
  description: 'LiveKit integration with the Embodied Learning Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-100`}>
        <div className="flex h-full flex-col">
          <div className="flex-1">{children}</div>
          {/*  Copyright */}
          <footer className="flex h-16 items-center justify-center text-white">
            <p className="text-sm">
              &copy; {new Date().getFullYear()}{' '}
              <a
                href="https://wp0.vanderbilt.edu/oele/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vanderbilt University, Open Ended Learning Environments Lab
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
