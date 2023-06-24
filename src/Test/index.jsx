import { Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { Provider } from 'react-redux';
import './index.css';
import { createModalInstance, Modal, modalStore, useModal } from '../Modal';

const TestModal1 = createModalInstance('testmodal1', (props) => {
  return (
    <Modal title="hello1" {...props}>
      testmodal1
    </Modal>
  );
});
const TestModal2 = createModalInstance('testmodal2', (props) => {
  return <Modal {...props}>testmodal2</Modal>;
});

export function Test() {
  return (
    <Provider store={modalStore}>
      <div className="testContainer">
        <Left />
        TestMain
        <Right />
        <TestModal1 />
        <TestModal2 />
      </div>
    </Provider>
  );
}

function Left() {
  const modal = useModal('testmodal1');
  return <Button onClick={modal.show}>Left Show Modal</Button>;
}

function Right() {
  const modal = useModal('testmodal2');
  return <Button onClick={modal.show}>Right Show Modal</Button>;
}
