
import './ActivityChart.css';

const ActivityChart = () => {
  return (
    <div className="activity-chart glass-card animate-slide-up delay-200">
      <div className="chart-header flex-between">
        <h3>Market Activity</h3>
        <div className="chart-tabs">
          <button className="tab active">1D</button>
          <button className="tab">1W</button>
          <button className="tab">1M</button>
          <button className="tab">1Y</button>
        </div>
      </div>
      
      <div className="chart-container">
        {/* CSS Mockup of a chart */}
        <div className="grid-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
        <div className="data-path">
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path 
              d="M0,250 L100,200 L200,220 L300,150 L400,180 L500,80 L600,120 L700,50 L800,90 L900,40 L1000,20 L1000,300 L0,300 Z" 
              fill="url(#gradient)" 
              className="chart-area-fill"
            />
            <path 
              d="M0,250 L100,200 L200,220 L300,150 L400,180 L500,80 L600,120 L700,50 L800,90 L900,40 L1000,20" 
              fill="none" 
              stroke="var(--primary)" 
              strokeWidth="4"
              filter="url(#glow)"
              className="chart-line-stroke"
            />
          </svg>
        </div>
        
        <div className="data-points">
          <div className="point" style={{ left: '50%', top: '80px' }}>
            <div className="tooltip">$45,231.89</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
