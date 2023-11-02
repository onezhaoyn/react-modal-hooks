import { Modal } from '@arco-design/web-react';
import { useModalByID } from './useModalByID';

// UI 层
export const ModalWrapper = ({ id, children, ...rest }) => {
  const { showWithProps: show, hide, visible, props = {} } = useModalByID(id);
  console.log('props: ', props);
  return (
    <Modal
      visible={visible}
      mountOnEnter={false}
      onOk={() => show()}
      onCancel={() => hide()}
      {...props}
      {...rest}
    >
      {children}
    </Modal>
  );
};
