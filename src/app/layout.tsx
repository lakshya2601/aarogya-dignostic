import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
      >
        {children}
        {/* Calendly Widget */}
        {/* <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                Calendly.initBadgeWidget({
                  url: 'https://calendly.com/lakshyaporwal2601',
                  text: 'Schedule Bookings',
                  color: '#0069ff',
                  textColor: '#ffffff',
                  branding: true
                });
              };
            `,
          }}
        /> */}
      </body>
    </html>
  );
}
