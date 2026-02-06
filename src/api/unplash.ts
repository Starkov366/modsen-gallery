import { config } from '../config/env';

const baseUrl = config.apiUrl;

export const unsplashApi = {
  async getPhotosByTopic(topic: string, page = 1) {
    const response = await fetch(
      `${baseUrl}/search/photos?page=${page}&query=${topic}&per_page=20`,
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
    return data.results; // важно: результаты лежат в results
  },
};
