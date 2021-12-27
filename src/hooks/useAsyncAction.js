import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import deepEqual from 'deep-equal';
import useErrorHandler from '../errorHandler/useErrorHandler';

const useAsyncAction = (action, immediate = false, args = []) => {
  const errorHandler = useErrorHandler();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    args,
    value: null,
    status: 'idle',
    error: null
  });
  const [argsMemo, setArgsMemo] = useState(args);

  const actionErrorHandler = useCallback(errorHandler.actionErrorHandler, []);

  const execute = useCallback(
    function() {
        setState({
          args: [...arguments],
          value: null,
          status: 'pending',
          error: null
        });
      return dispatch(action.apply(null, arguments))
        .then(response => {
          if (response?.tfa) return response.data;
          else
            setState({
              args: [...arguments],
              value: response,
              status: 'success',
              error: null
            });
        })
        .catch(error => {
          setState({
            args: [...arguments],
            value: null,
            status: 'error',
            error: actionErrorHandler(error)
          });
          if (error?.tfa) throw actionErrorHandler(error);
        });
    },
    [dispatch, setState, actionErrorHandler, action]
  );

  useEffect(() => {
    if (immediate) {
      execute(...argsMemo);
    }
  }, [execute, immediate, argsMemo]);

  const arrayEquals = (a, b) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => deepEqual(val, b[index]))
    );
  };

  useEffect(() => {
    if (!arrayEquals(argsMemo, args)) {
      setArgsMemo(args);
    }
  }, [args, setArgsMemo, argsMemo]);

  return { ...state, execute, isLoading: state.status === 'pending' };
};

export default useAsyncAction;
