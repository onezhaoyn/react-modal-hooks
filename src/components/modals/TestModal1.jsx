import { Form, Input, InputNumber } from '@arco-design/web-react';
import { useMemo } from 'react';
import { createModalInstance, Modal, useModal } from '../UI/Modal';

const MODAL_ID = 'testmodal1';

export const TestModal1 = createModalInstance(MODAL_ID, (props) => {
  const [form] = Form.useForm();
  const { hide } = useModal(MODAL_ID);

  return (
    <Modal
      title="hello1"
      {...props}
      onOk={async () => {
        const vals = form.getFieldsValue();
        console.log('vals: ', vals);
        hide();
      }}
    >
      <Form form={form}>
        <Form.Item field="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item field="age" label="Age">
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
});
