/*
 * Axios response interceptor
 * --------------------------
 * Redirect 401 response to logout page
 */
const UnauthorizedHandler = async (error: any) => {
  const { response } = error || {};
  // const { status, config } = response;
  // const { url } = config || {};
  // if (status === 401) {
  //   // For website only
  //   if (window?.location?.href) {
  //     // As logout page will call this API and it can also return a 401 response
  //     if (url !== '/login') {
  //       try {
  //         window.location.href = `/login/?error=${status}`;
  //       } catch (error) {
  //         window.location.href = `/login/?error=500`;
  //       }
  //     }
  //   }
  // }

  return response;
};
export default UnauthorizedHandler;
