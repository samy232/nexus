"use client";

import { Search, Bell, User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import './Header.css';

const Header = () => {
  const { data: session } = useSession();
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
            {session?.user?.image ? (
              <img src={session.user.image} alt={session.user.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            ) : (
              <User size={20} />
            )}
          </div>
          <div className="user-info">
            <span className="user-name">{session?.user?.name || 'Guest User'}</span>
            <span className="user-role">{session ? 'Pro Trader' : 'Please Login'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
