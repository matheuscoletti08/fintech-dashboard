import { Avatar, Space, Typography, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export function Header() {
  return (
    <div className="header-container">
      <Space size="middle">
        <Avatar size={48} icon={<UserOutlined />} style={{ backgroundColor: '#1677ff' }} />
        <div>
          <Title level={4} style={{ margin: 0 }}>Olá, bem  vindo!</Title>
          <Text type="secondary">Agência 0001 • Conta 12345-6</Text>
        </div>
      </Space>
      <Button type="text" icon={<LogoutOutlined />}>Sair</Button>
    </div>
  );
}
