/*
 * Axios response interceptor
 * --------------------------
 * Convert a status code 2XX response error to a 4XX response error.
 */
const ErrorResponseTransform = (response: any) => {
  try {
    if (response.headers['content-type']?.includes('application/json')) {
      return response.data;
    } else {
      throw 'Internal Server Error';
    }
  } catch (err) {
    response.status = 500;
    response.statusText = 'Internal Server Error';
    return Promise.reject({
      config: response.config,
      request: response.request,
      response,
    });
  }
};

export default ErrorResponseTransform;
