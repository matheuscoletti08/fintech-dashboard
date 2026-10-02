import { useState } from 'react';
import { ConfigProvider } from 'antd';
import { Header } from './components/Header';
import { BalanceCard } from './components/BalanceCard';
import { QuickActions } from './components/QuickActions';
import { StatementTable } from './components/StatementTable';
import { PixModal } from './components/PixModal';
import './App.css';

export default function App() {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Atacadão', category: 'Alimentação', type: 'saida', amount: 142.50, date: '25/09/2026' },
    { id: 2, description: 'Transferência Pix Recebida', category: 'PIX', type: 'entrada', amount: 500.00, date: '24/09/2026' },
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#1677ff', borderRadius: 8 } }}>
      <div className="app-container">
        <Header />
        <BalanceCard />
        <QuickActions onOpenPix={() => setIsPixModalOpen(true)} />
        <StatementTable data={transactions} />

        <PixModal
          open={isPixModalOpen}
          onClose={() => setIsPixModalOpen(false)}
          onSuccess={handleAddTransaction}
        />
      </div>
    </ConfigProvider>
  );
}
