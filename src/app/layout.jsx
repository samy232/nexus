import './globals.css';
import AuthProvider from '../components/providers/AuthProvider';

export const metadata = {
  title: 'Nexus Dashboard',
  description: 'Designed and developed by salamani samy rayan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div id="root">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
