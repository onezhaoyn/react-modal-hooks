import { Modal } from '@arco-design/web-react';
import { useCallback } from 'react';
import { useModal } from './useModal';

// UI 层
export const ModalWrapper = ({ id, children, ...rest }) => {
  const { show, hide, visible } = useModal(id);

  return (
    <Modal
      visible={visible}
      mountOnEnter={false}
      onOk={() => show()}
      onCancel={() => hide()}
      {...rest}
    >
      {children}
    </Modal>
  );
};
