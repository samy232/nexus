
import { Search, Bell, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass-panel animate-slide-up">
      <div className="search-bar">
        <Search className="search-icon" size={20} />
        <input type="text" placeholder="Search transactions, wallets, or settings..." />
      </div>

      <div className="header-actions">
        <button className="action-btn notification-btn">
          <Bell size={20} />
          <span className="badge">3</span>
        </button>
        
        <div className="user-profile">
          <div className="avatar flex-center">
            <User size={20} />
          </div>
          <div className="user-info">
            <span className="user-name">Salamani Samy</span>
            <span className="user-role">Pro Trader</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
