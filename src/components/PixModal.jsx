import { Modal, Form, Input, InputNumber, message } from 'antd';

export function PixModal({ open, onClose, onSuccess }) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // manda um pix de exemplo
    message.success(`Pix de R$ ${values.valor} enviado com sucesso para ${values.chavePix}!`);

    // atauliza os dados do app 
    onSuccess({
      id: Date.now(),
      description: `Pix enviado - ${values.chavePix}`,
      category: 'PIX',
      type: 'saida',
      amount: values.valor,
      date: new Date().toLocaleDateString('pt-BR'),
    });

    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Realizar Transferência Pix"
      open={open}
      onCancel={onClose}
      onOk={() => form.submit()}
      okText="Confirmar Transferência"
      cancelText="Cancelar"
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="chavePix"
          label="Chave Pix (CPF, E-mail ou Telefone)"
          rules={[{ required: true, message: 'Por favor, informe a chave Pix!' }]}
        >
          <Input placeholder="Digite a chave Pix de destino" />
        </Form.Item>

        <Form.Item
          name="valor"
          label="Valor (R$)"
          rules={[{ required: true, message: 'Por favor, informe o valor!' }]}
        >
          <InputNumber
            style={{ width: '100%' }}
            min={0.01}
            precision={2}
            prefix="R$"
            placeholder="0,00"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
