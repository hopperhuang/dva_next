import Cookie from 'js-cookie';

/**
 * 从cookie中获取token
 * @param {Object} req next.js req参数
 * 返回undefined 或者 token
 */
const getTokenFromCookie = (req) => {
  if (req) { // req存在，sever-side
    const { cookie } = req.headers;
    // 没有设置cookie
    if (!cookie) {
      return cookie;
    } else { // 存在cookie
      // get token from cookie header
      return 2333;
    }
  } else { // req 不存在client-side
    console.log('client side');
    const token = Cookie.get('token');
    return token;
  }
};

/**
 * 将token写入到cookie里面
 * @param {String} token 登陆信息
 */
const setTokenToCookie = (token) => {
  console.log('set token!!');
  Cookie.set('token', token);
};

const removeTokenFromCookie = () => {
  // console.log('remove token!!');
  Cookie.remove('token');
};


const auth = {
  getTokenFromCookie,
  setTokenToCookie,
  removeTokenFromCookie,
};

export default auth;
