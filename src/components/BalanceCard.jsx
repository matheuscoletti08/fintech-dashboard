import { useState } from 'react';
import { Card, Statistic, Button, Row, Col, Typography } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

export function BalanceCard() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Card className="balance-card">
      <Row justify="space-between" align="middle">
        <Col>
          <Text className="balance-title">Saldo Disponível</Text>
          <div className="balance-amount-wrapper">
            {showBalance ? (
              <Statistic
                value={2450.75}
                precision={2}
                prefix="R$"
                valueStyle={{ color: '#fff', fontSize: '32px', fontWeight: 'bold' }}
              />
            ) : (
              <Title level={2} className="balance-hidden">R$ ••••••</Title>
            )}
          </div>
        </Col>
        <Col>
          <Button
            type="text"
            className="balance-toggle-btn"
            icon={showBalance ? <EyeInvisibleOutlined className="balance-eye-icon" /> : <EyeOutlined className="balance-eye-icon" />}
            onClick={() => setShowBalance(!showBalance)}
          />
        </Col>
      </Row>
    </Card>
  );
}
