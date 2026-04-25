
import { Home, PieChart, Wallet, ArrowRightLeft, Settings, LogOut, Hexagon } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: PieChart, label: 'Analytics' },
    { icon: Wallet, label: 'Wallets' },
    { icon: ArrowRightLeft, label: 'Transactions' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="sidebar glass-panel animate-fade-in">
      <div className="sidebar-header flex-center">
        <Hexagon className="logo-icon" size={32} color="var(--primary)" />
        <h2 className="logo-text gradient-text">NEXUS</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
              <a href="#" className={`nav-link ${item.active ? 'active' : ''}`}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-link logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
