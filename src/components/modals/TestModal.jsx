import { Form, Input, InputNumber } from '@arco-design/web-react';
import { sleep } from '../../utils/sleep';
import { createModalInstance, ModalWrapper, useModalByID } from '../UI/Modal';

export const MODAL_ID = 'testmodal';

export const TestModal = createModalInstance(MODAL_ID, (props) => {
  const [form] = Form.useForm();
  const { hide, resolve } = useModalByID(MODAL_ID);
  const { user } = props;

  return (
    <ModalWrapper
      title="hello1"
      {...props}
      onOk={async () => {
        const vals = form.getFieldsValue();
        resolve(vals);
      }}
    >
      <Form form={form} initialValues={user}>
        <Form.Item field="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item field="age" label="Age">
          <InputNumber />
        </Form.Item>
      </Form>
    </ModalWrapper>
  );
});
