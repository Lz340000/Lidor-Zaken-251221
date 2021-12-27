import axios from 'axios';
const SUCCESS = 'OK';

const callApi = (method, endpoint) => {
  const res = axios.request({
    method: method,
    url: endpoint
  });
  return res;
} 


export default async function api(
  endpoint,
  { method = 'get', body, params } = {
    method: 'get',
    body: {},
    params: {}
  }
) {
  let headers = {};

  try {
    let res = {};
      res = await callApi(method, endpoint);
      const { data = {} } = res;
    if (res?.statusText === SUCCESS) {
      return data;
    } else {
      const error = {
        ...res,
        apiReq: {
          method: method,
          url: endpoint,
          headers: headers,
          data: body,
          params
        }
      };
      throw error;
    }
  } catch (err) {
    const { data = err, status } = err?.response || {};
      const error = {
        ...data,
        status,
        apiReq: {
          method: method,
          url: endpoint,
          headers: headers,
          data: body,
          params
        }
      };
    if (!error.data) error.data = err;
    throw error;
  }

}

/*


  try {
    let res = {};
      res = await callApi({
        method,
        url: endpoint,
        headers,
        data: body,
        params
      });
  
      console.log(res)
    const { data = {} } = res;

    if (data?.status === SUCCESS) {
      return data.data;
    } else {
      const error = {
        ...data,
        apiReq: {
          method: method,
          url: endpoint,
          headers: headers,
          data: body,
          params
        }
      };
      throw error;
    }
  } catch (err) {
    const { data = err, status } = err?.response || {};
      const error = {
        ...data,
        status,
        apiReq: {
          method: method,
          url: endpoint,
          headers: headers,
          data: body,
          params
        }
      };
    if (!error.data) error.data = err;
    throw error;
  }

*/