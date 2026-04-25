"use client";
import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, RefreshCw, Loader2 } from 'lucide-react';
import './RecentTransactions.css';

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setTransactions(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load transactions", err);
        setLoading(false);
      });
  }, []);

  const getIcon = (type) => {
    switch(type) {
      case 'receive': return <ArrowDownRight size={20} className="text-success" />;
      case 'send': return <ArrowUpRight size={20} className="text-danger" />;
      case 'swap': return <RefreshCw size={20} className="text-primary" />;
      default: return null;
    }
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="recent-transactions glass-card animate-slide-up delay-300">
      <div className="transactions-header flex-between">
        <h3>Recent Activity</h3>
        <button className="view-all">View All</button>
      </div>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <Loader2 className="animate-spin text-primary" size={24} style={{ animation: 'spin 1s linear infinite' }} />
        </div>
      ) : transactions.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
          No transactions yet.
        </div>
      ) : (
        <div className="transactions-list">
          {transactions.map((tx, index) => (
            <div key={tx.id} className="transaction-item" style={{ animationDelay: `${(index * 100) + 400}ms` }}>
              <div className="tx-icon flex-center">
                {getIcon(tx.type)}
              </div>
              
              <div className="tx-details">
                <div className="tx-title">{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} {tx.asset}</div>
                <div className="tx-date">{formatDate(tx.createdAt)}</div>
              </div>
              
              <div className="tx-amounts">
                <div className={`tx-primary ${tx.type === 'receive' ? 'text-success' : tx.type === 'send' ? 'text-danger' : 'text-main'}`}>
                  {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''}{tx.amount} {tx.asset}
                </div>
                <div className="tx-secondary">${tx.usdValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
