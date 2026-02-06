import { API_URL } from '../constants';
export const config = {
  unsplashKey: process.env.REACT_APP_UNPLASH_API_ACCESS_KEY,
  apiUrl: API_URL,

  validate() {
    if (!this.unsplashKey) {
      console.error('REACT_APP_UNPLASH_API_ACCESS_KEY NOT FOUND IN ENV');
      return false;
    }
    return true;
  },

  getAuthorizationHeader() {
    return `Client-ID ${this.unsplashKey}`;
  },
};

if (process.env.NODE_ENV === 'development') {
  config.validate();
}
