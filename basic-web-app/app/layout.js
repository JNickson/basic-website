import "./globals.css";

export const metadata = {
  title: "Basic-web-app",
  description: "Most basic nextjs web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
