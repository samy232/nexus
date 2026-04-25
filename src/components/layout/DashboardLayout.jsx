
import Sidebar from './Sidebar';
import Header from './Header';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="content-wrapper">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
