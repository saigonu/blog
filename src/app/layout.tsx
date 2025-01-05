import type { Metadata } from "next";
import "./globals.css";
import { StarsBackground } from "./_components/ui/stars-background";
import { ShootingStars } from "./_components/ui/shooting-stars";

export const metadata: Metadata = {
  title: `Sai Gonuguntla - Blog`,
  description: `Sai Gonuguntla's Blog`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/monokai-sublime.min.css"
          integrity="sha512-ade8vHOXH67Cm9z/U2vBpckPD1Enhdxl3N05ChXyFx5xikfqggrK4RrEele+VWY/iaZyfk7Bhk6CyZvlh7+5JQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body>
        <div className="relative min-h-screen">
          {/* Stars Background */}
          <StarsBackground
            starDensity={0.001}
            allStarsTwinkle={true}
            twinkleProbability={0.7}
            minTwinkleSpeed={0.5}
            maxTwinkleSpeed={1}
            className="absolute inset-0 z-0"
          />

          {/* Shooting Stars Background */}
          <ShootingStars
            minSpeed={10}
            maxSpeed={30}
            minDelay={1200}
            maxDelay={4200}
            starColor="#FFFFFF"
            trailColor="#FFFFFF"
            starWidth={10}
            starHeight={1}
            className="absolute inset-0 z-10"
          />

          {/* Page Content */}
          <div className="relative z-20">{children}</div>
        </div>
      </body>
    </html>
  );
}
