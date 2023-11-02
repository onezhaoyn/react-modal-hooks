import { createStore } from 'redux';

const modalReducer = (state = {}, action) => {
  const { type, payload } = action;
  const { modalID, props } = payload ?? {};

  switch (type) {
    case 'modal/show':
      return {
        ...state,
        [modalID]: {
          visible: true,
          props,
        },
      };
    case 'modal/hide':
      return {
        ...state,
        [modalID]: {
          visible: false,
          props,
        },
      };
    default:
      return state;
  }
};

export const modalStore = createStore(modalReducer);
