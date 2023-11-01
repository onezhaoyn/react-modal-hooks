import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 逻辑层
const modalCallbacks = {};

export function useModal(modalID) {
  const dispatch = useDispatch();
  const visible = useSelector((s) => s[modalID]);

  const show = useCallback(() => {
    return new Promise((resolve) => {
      modalCallbacks[modalID] = resolve;
      dispatch({
        type: 'modal/show',
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
      type: 'modal/hide',
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
