import service from './request';
export const testGetMethod = () => service.get('/test/get');
export const testGetHaveParamsMethod = (params) => service.get('/test/getHaveParams', { params });

export const testPost = (params) =>
  service.post('/test/post', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
export const testPostJson = (params) => service.get('/hc/list');

export const testPostFile = (params) =>
  service.post('/test/postFile', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
