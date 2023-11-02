import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 逻辑层
const promiseResolveFns = {};

export function useModalByID(modalID) {
  const dispatch = useDispatch();

  const showWithProps = useCallback(
    (props) => {
      return new Promise((resolve) => {
        promiseResolveFns[modalID] = resolve;
        dispatch({
          type: 'modal/show',
          payload: {
            modalID,
            props,
          },
        });
      });
    },
    [modalID]
  );

  const resolve = useCallback(
    (...args) => {
      const resolveFn = promiseResolveFns[modalID];

      if (resolveFn && typeof resolveFn === 'function') {
        resolveFn(...args);
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

    delete promiseResolveFns[modalID];
  }, [modalID]);

  const state = useSelector((s) => s[modalID]);

  return {
    showWithProps,
    resolve,
    hide,
    visible: state?.visible ?? false,
    props: state?.props,
  };
}
