
import { ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';
import './RecentTransactions.css';

const RecentTransactions = () => {
  const transactions = [
    { id: 1, type: 'receive', asset: 'ETH', amount: '+2.45', usd: '+$8,341.20', date: 'Today, 14:32', status: 'completed' },
    { id: 2, type: 'send', asset: 'BTC', amount: '-0.12', usd: '-$5,120.50', date: 'Today, 09:15', status: 'completed' },
    { id: 3, type: 'swap', asset: 'SOL', amount: '145.00', usd: '$12,450.00', date: 'Yesterday, 18:45', status: 'pending' },
    { id: 4, type: 'receive', asset: 'USDT', amount: '+1500.00', usd: '+$1,500.00', date: 'Yesterday, 11:20', status: 'completed' },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'receive': return <ArrowDownRight size={20} className="text-success" />;
      case 'send': return <ArrowUpRight size={20} className="text-danger" />;
      case 'swap': return <RefreshCw size={20} className="text-primary" />;
      default: return null;
    }
  };

  return (
    <div className="recent-transactions glass-card animate-slide-up delay-300">
      <div className="transactions-header flex-between">
        <h3>Recent Activity</h3>
        <button className="view-all">View All</button>
      </div>
      
      <div className="transactions-list">
        {transactions.map((tx, index) => (
          <div key={tx.id} className="transaction-item" style={{ animationDelay: `${(index * 100) + 400}ms` }}>
            <div className="tx-icon flex-center">
              {getIcon(tx.type)}
            </div>
            
            <div className="tx-details">
              <div className="tx-title">{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} {tx.asset}</div>
              <div className="tx-date">{tx.date}</div>
            </div>
            
            <div className="tx-amounts">
              <div className={`tx-primary ${tx.type === 'receive' ? 'text-success' : tx.type === 'send' ? 'text-danger' : 'text-main'}`}>
                {tx.amount} {tx.asset}
              </div>
              <div className="tx-secondary">{tx.usd}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
