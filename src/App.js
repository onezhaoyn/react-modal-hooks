import { Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { Provider } from 'react-redux';

import { modalStore, useModal } from './components/UI/Modal';
import { TestModal2, TestModal1 } from './components/modals/index';

import './App.css';

function App() {
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

export default App;

function Left() {
  const modal = useModal('testmodal1');
  return (
    <Button
      onClick={() => {
        modal.show().then((vals) => {
          console.log(vals);
        });
      }}
    >
      Left Show Modal
    </Button>
  );
}

function Right() {
  const modal = useModal('testmodal2');
  return <Button onClick={modal.show}>Right Show Modal</Button>;
}
