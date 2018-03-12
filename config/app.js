import { ENV } from './env';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';

export const apiEndpoint = isDebug ? 'http://10.150.194.123:3000' : 'https://device-hub.herokuapp.com';
// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;

