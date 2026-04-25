"use client";

import { useSession } from 'next-auth/react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/widgets/StatCard';
import ActivityChart from '../components/widgets/ActivityChart';
import RecentTransactions from '../components/widgets/RecentTransactions';

function App() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <DashboardLayout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--text-secondary)' }}>
          Loading dashboard...
        </div>
      </DashboardLayout>
    );
  }

  if (!session) {
    return (
      <DashboardLayout>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--text-secondary)' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Welcome to Nexus</h2>
          <p>Please log in using the sidebar to view your analytics and transactions.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="dashboard-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '24px'
      }}>
        <StatCard title="Total Balance" value="$124,563.00" change={12.5} isPositive={true} delay="0" />
        <StatCard title="24h Volume" value="$45,231.89" change={5.2} isPositive={true} delay="100" />
        <StatCard title="Total Yield" value="$2,845.50" change={1.4} isPositive={false} delay="200" />
      </div>
      
      <div className="dashboard-grid-bottom" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }}>
        <ActivityChart />
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
}

export default App;
