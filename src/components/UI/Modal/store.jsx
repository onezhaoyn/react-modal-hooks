import { createStore } from 'redux';

const modalReducer = (state = {}, action) => {
  const { type, payload = {} } = action;

  switch (type) {
    case 'modal/show':
      return {
        ...state,
        [payload.modalID]: true,
      };
    case 'modal/hide':
      return {
        ...state,
        [payload.modalID]: false,
      };
    default:
      return state;
  }
};

export const modalStore = createStore(modalReducer);
