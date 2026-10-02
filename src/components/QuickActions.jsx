import { Card, Row, Col, Space, Typography } from 'antd';
import { QrcodeOutlined, SwapOutlined, FileTextOutlined, CreditCardOutlined } from '@ant-design/icons';

const { Text } = Typography;

export function QuickActions({ onOpenPix }) {
  return (
    <div className="quick-actions-section">
      <Text strong className="section-title">Ações Rápidas</Text>
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={6}>
          <Card hoverable className="action-card" onClick={onOpenPix}>
            <Space direction="vertical" size="small">
              <QrcodeOutlined className="action-icon" />
              <Text strong>Área Pix</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card hoverable={false} disabled className="action-card-disabled">
            <Space direction="vertical" size="small">
              <SwapOutlined className="action-icon" />
              <Text strong>Transferir</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card hoverable={false} disabled className="action-card-disabled">
            <Space direction="vertical" size="small">
              <FileTextOutlined className="action-icon" />
              <Text strong>Pagar Boleto</Text>
            </Space>
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card hoverable={false} disabled className="action-card-disabled">
            <Space direction="vertical" size="small">
              <CreditCardOutlined className="action-icon" />
              <Text strong>Meus Cartões</Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
