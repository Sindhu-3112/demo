import './globals.css';

export const metadata = {
  title: 'Next.js App Login',
  description: 'Simple login-protected navigation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif' }}>{children}</body>
    </html>
  );
}
