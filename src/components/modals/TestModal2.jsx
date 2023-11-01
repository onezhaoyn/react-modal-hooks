import { createModalInstance, Modal } from '../UI/Modal';

export const TestModal2 = createModalInstance('testmodal2', (props) => {
  return <Modal {...props}>testmodal2</Modal>;
});
