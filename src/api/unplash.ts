import { config } from '../config/env';

const baseUrl = config.apiUrl;

export const unsplashApi = {
  async getPhotosByTopic(topic: string, page = 1) {
    const response = await fetch(
      `${baseUrl}/search/photos?page=${page}&query=${topic}&per_page=9`,
      {
        headers: {
          Authorization: config.getAuthorizationHeader(),
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Unsplash error: ${response.status}`);
    }

    const data = await response.json();
    return { result: data.results, totalPages: 10 };
  },
  async getRandomPhotos(count = 9, page = 1) {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&random?count=${count}&per_page=9`,
      {
        headers: {
          Authorization: config.getAuthorizationHeader(),
        },
      }
    );

    if (!response.ok) throw new Error(`Unsplash error: ${response.status}`);

    const data = await response.json();
    return { result: data, totalPages: 1 };
  },
  async getPhotosBySearch(text: string, page = 1) {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${text}&per_page=9`;
    const response = await fetch(url, {
      headers: {
        Authorization: config.getAuthorizationHeader(),
      },
    });

    const data = await response.json();
    console.log(data);
    return { result: data.results, totalPages: 10 };
  },
};
