// layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        {/* Add your header content here */}
      </header>
      <body>{children}</body>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </html>
  );
}