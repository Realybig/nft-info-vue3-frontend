export interface IConfig {
  env: string; // 开发环境
  mock?: boolean; // mock数据
  title: string; // 项目title
  baseUrl?: string; // 项目地址
  baseApi?: string; // api请求地址
  APPID?: string; // 公众号appId  一般放在服务器端
  APPSECRET?: string; // 公众号appScript 一般放在服务器端
}

const dev: IConfig = {
  env: 'development',
  mock: false,
  title: '开发',
  baseUrl: '/api',
  baseApi: 'http://127.0.0.1:3000',
  APPID: '17970',
  APPSECRET: 'nft-info',
};

const prod: IConfig = {
  env: 'production',
  mock: false,
  title: '生产',
  baseUrl: '/api',
  baseApi: 'http://localhost:3000',
  APPID: '17970',
  APPSECRET: 'nft-info',
};
export const config: IConfig = import.meta.env.MODE == 'development' ? dev : prod;
