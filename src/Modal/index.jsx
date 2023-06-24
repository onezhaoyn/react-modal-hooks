import { Modal } from '@arco-design/web-react';
import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

// UI 层
function ModalWrapper({ id, children, ...acroModalProps }) {
  const { show, hide, visible } = useModal(id);
  const handleOk = useCallback(() => show(), []);
  const handleCancel = useCallback(() => hide(), []);

  return (
    <Modal
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      {...acroModalProps}
    >
      {children}
    </Modal>
  );
}

export { ModalWrapper as Modal };

export function createModalInstance(modalID, RenderModal) {
  const ModalInstance = (props = {}) => {
    return <RenderModal id={modalID} {...props} />;
  };
  return ModalInstance;
}

// 逻辑层
const modalCallbacks = {};
export function useModal(modalID) {
  const dispatch = useDispatch();
  const visible = useSelector((s) => s[modalID]);

  const show = useCallback(() => {
    return new Promise((resolve) => {
      modalCallbacks[modalID] = resolve;
      dispatch({
        type: 'nice-modal/show',
        payload: {
          modalID,
        },
      });
    });
  }, [modalID]);

  const resolve = useCallback(
    (...args) => {
      if (modalCallbacks[modalID]) {
        modalCallbacks[modalID](...args);
      }
    },
    [modalID]
  );

  const hide = useCallback(() => {
    dispatch({
      type: 'nice-modal/hide',
      payload: {
        modalID,
      },
    });
    delete modalCallbacks[modalID];
  }, [modalID]);

  return {
    show,
    resolve,
    hide,
    visible,
  };
}

const modalReducer = (state = {}, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case 'nice-modal/show':
      return {
        ...state,
        [payload.modalID]: true,
      };
    case 'nice-modal/hide':
      return {
        ...state,
        [payload.modalID]: false,
      };
    default:
      return state;
  }
};

export const modalStore = createStore(modalReducer);
