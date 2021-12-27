export const REDIRECT = 'redirect';
  export const RETURN_MESSAGE = 'message';
  export const THROW = 'throw';
  export const httpStatus = {
    403: { action: REDIRECT, path: '/login' },
    500: { action: REDIRECT, path: '/error-page' }
  };
  export const errorList = {
    500: { action: REDIRECT, path: '/error-page' }
  };
