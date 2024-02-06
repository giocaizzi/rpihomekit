import '@/components/styles.css';
import Header  from '@/components/layouts/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body>
        <Header/>
          {children}
      </body>
    </html>
  );
}