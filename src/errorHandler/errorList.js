export const REDIRECT = 'redirect';
  export const RETURN_MESSAGE = 'message';
  export const THROW = 'throw';
  export const httpStatus = {
    403: { action: REDIRECT, path: '/error-page' },
    404: { action: REDIRECT, path: '/error-page' },
    500: { action: REDIRECT, path: '/error-page' }
  };
  export const errorList = {
    500: { action: REDIRECT, path: '/error-page' }
  };
