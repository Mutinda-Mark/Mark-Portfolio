import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mark Mutinda | Computer Science & Software Engineering',

  description:
    'Explore the portfolio of Mark Mutinda, a Computer Science student at Strathmore University. Projects in artificial intelligence, software engineering, computer vision and embedded systems.',

  keywords: [
    'Mark Mutinda',
    'Mark Mutinda Portfolio',
    'Computer Science',
    'Software Engineering',
    'Artificial Intelligence',
    'Computer Vision',
    'KILIMO',
    'Njia',
    'AlcoTrack',
    'Strathmore University',
  ],

  authors: [
    {
      name: 'Mark Mutinda',
    },
  ],

  openGraph: {
    title: 'Mark Mutinda | Portfolio',
    description:
      'Curiosity, translated into working systems. Explore my projects, academic journey and technical interests.',
    type: 'website',
    images: [
      {
        url: '/images/Mark.jpg',
        width: 960,
        height: 1280,
        alt: 'Mark Mutinda',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}