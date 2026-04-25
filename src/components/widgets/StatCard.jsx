
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ title, value, change, isPositive, delay }) => {
  return (
    <div className={`stat-card glass-card animate-slide-up delay-${delay}`}>
      <div className="stat-header flex-between">
        <h3 className="stat-title">{title}</h3>
        <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span>{change}%</span>
        </div>
      </div>
      <div className="stat-value gradient-text">{value}</div>
      <div className="stat-chart-mockup">
        {/* Simple CSS-based mini sparkline mockup */}
        <div className={`sparkline ${isPositive ? 'spark-up' : 'spark-down'}`}></div>
      </div>
    </div>
  );
};

export default StatCard;
