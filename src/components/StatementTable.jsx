import { Card, Table, Tag, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Text } = Typography;

export function StatementTable({ data }) {
  const columns = [
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description',
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category',
      render: (category) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Valor',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
      render: (amount, record) => {
        const isEntry = record.type === 'entrada';
        return (
          <Text type={isEntry ? 'success' : 'danger'} strong>
            {isEntry ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            {` R$ ${amount.toFixed(2)}`}
          </Text>
        );
      },
    },
  ];

  return (
    <Card title="Últimas Movimentações">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="middle"
        rowKey="id"
      />
    </Card>
  );
}
