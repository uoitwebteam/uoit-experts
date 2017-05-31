import { apiCredentials } from './credentials';

const { apiId, apiKey, apiSecret } = apiCredentials;

export const environment = {
  production: true,
  apiId,
  apiKey,
  apiSecret
};