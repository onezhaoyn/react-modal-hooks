import { Button } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import { Provider } from 'react-redux';

import { modalStore, useModalByID } from './components/UI/Modal';
import { TestModal } from './components/modals/index';

import './App.css';
import { MODAL_ID } from './components/modals/TestModal';

function App() {
  return (
    <Provider store={modalStore}>
      <div className="testContainer">
        <Left />
        TestMain
        <Right />
        <TestModal />
      </div>
    </Provider>
  );
}

export default App;

function Left() {
  const modal = useModalByID(MODAL_ID);

  return (
    <Button
      onClick={() => {
        modal
          .showWithProps({ user: { name: 'zhao', age: 123 } })
          .then((vals) => {
            console.log(123123, vals);
            modal.hide();
          });
      }}
    >
      Left Show Modal
    </Button>
  );
}

function Right() {
  const modal = useModalByID(MODAL_ID);

  return (
    <Button onClick={() => modal.showWithProps()}>Right Show Modal</Button>
  );
}
