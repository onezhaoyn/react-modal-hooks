export { ModalWrapper as Modal } from './Modal.jsx';
export { modalStore } from './store.jsx';
import { useModal } from './useModal';
export { useModal };

export function createModalInstance(modalID, RenderModal) {
  const ModalInstance = (props = {}) => {
    const { visible } = useModal(modalID);
    if (!visible) {
      return null;
    }
    return <RenderModal id={modalID} {...props} />;
  };
  return ModalInstance;
}
