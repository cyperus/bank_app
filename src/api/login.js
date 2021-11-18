import { request } from 'umi';

/** 登录接口 POST /api/login/account */
export async function userLogin(body, options) {
  return request('/api/admin/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
