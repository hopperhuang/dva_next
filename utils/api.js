import fetch from 'dva/fetch';

const baseUrl = 'http://carriers-test.ywopt.com/v1';
const baseHeader = {
  'Content-Type': 'application/json',
};

function parseJson(response) {
  return response.json();
}

function paserAccrodingCode(resJson) {
  const { code } = resJson;
  if (code === 0) {
    return resJson.data;
  }
  const err = new Error(resJson.message);
  err.code = code;
  // 请求api成功，可能因为参数等问题出错
  throw err;
}

function checkStatus(response) {
  const { status } = response;
  if (status >= 200 && status < 300) {
    return response;
  }
  const err = new Error(response.statusText);
  // 请求api出错
  err.response = response;
  throw err;
}

/**
 * 正常返回{data}, 错误返回{err}, 参数错误err.code存在，网络错误err.code不存在
 * @param {string} url
 * @param {object} options
 */
function requestTool(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJson)
    .then(paserAccrodingCode)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

function request(params) {
  const {
    url, method, headers, body,
  } = params;
  const finalUrl = baseUrl + url;
  const finalHeader = { ...baseHeader, ...headers };
  return requestTool(finalUrl, {
    method,
    headers: finalHeader,
    body: JSON.stringify(body),
  });
}

/**
 *
 * @param {Object} param0 username, password
 */
const login = ({ username, password }) => {
  const method = 'POST';
  const url = '/account/login';
  const body = { username, password };
  const headers = {};
  return request({
    url,
    method,
    body,
    headers,
  });
};

const getCompany = (token) => {
  const method = 'GET';
  const url = '/company/';
  const headers = {
    Authorization: token,
  };
  return request({
    url,
    method,
    headers,
  });
};

const getServiceByCompanyId = ({ id, token }) => {
  const method = 'GET';
  const url = `/service/?company_id=${id}`;
  const headers = {
    Authorization: token,
  };
  return request({
    url,
    method,
    headers,
  });
};

const api = {
  login,
  getCompany,
  getServiceByCompanyId,
};

export default api;

