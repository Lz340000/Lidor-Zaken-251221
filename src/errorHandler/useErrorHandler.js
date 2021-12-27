import { useCallback } from 'react';
import { useRouter } from 'hooks';
import {
  REDIRECT,
  RETURN_MESSAGE,
  THROW,
  errorList,
  httpStatus
} from './errorList';

export default function useErrorHandler() {
  const { push: redirectTo } = useRouter();

  const actionErrorHandler = useCallback(
    error => {
      try {
        const { code = 0, message = null, data, status } = error;
        console.log(error)
          const handle = errorList[code] || httpStatus[status] || {};

        switch (handle.action) {
          case RETURN_MESSAGE:
            return {
              code,
              data,
              message: handle.message || message || 'no message'
            };
          case REDIRECT:
            redirectTo(handle.path || '/error-page');
            return { code, message: 'redirect', data };
          case THROW:
            throw error;
          default:
            if (Number.isInteger(code) && code > 0)
              return {
                code,
                data,
                message: handle.message || message || 'no message'
              };
            // send Unknown Error log to the server
            redirectTo('/error-page');
            return { code: 500, message: 'unknown' };
        }
      } catch (err) {
        const { code = 0 } = err;
          const handle = errorList[code] || {};
        if (handle.action === THROW) throw err;

        // send Unknown Error log to the server
        redirectTo('/error-page');
        return { code: 500, message: 'unknown' };
      }
    },
    [redirectTo]
  );

  const reactErrorHandler = useCallback(
    error => {
      if (error?.name === 'ChunkLoadError') {
        window.location.reload();
        return;
      }
      try {
        redirectTo('/error-page');
      } catch (err) {
        //send Unknown Error log to the server
        redirectTo('/error-page');
      }
    },
    [redirectTo]
  );

  return { actionErrorHandler, reactErrorHandler };
}
