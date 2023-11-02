export { ModalWrapper } from './Modal.jsx';
export { modalStore } from './store.jsx';
import { useModalByID } from './useModalByID';
export { useModalByID };

export function createModalInstance(modalID, ModalComp) {
  return (props = {}) => {
    const { visible, props: modalProps } = useModalByID(modalID);
    if (!visible) {
      return null;
    }

    console.log('RenderModal props: ', props);
    return <ModalComp id={modalID} {...modalProps} {...props} />;
  };
}
