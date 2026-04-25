import './globals.css';

export const metadata = {
  title: 'Nexus Dashboard',
  description: 'Designed and developed by salamani samy rayan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
