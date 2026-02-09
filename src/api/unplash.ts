import { config } from '../config/env';
import { CATEGORY_LIST } from '../constants';
import { image } from '../types/images';
import { SearchResponse } from '../types/api';
import { Topic } from '../types/api';
const baseUrl = config.apiUrl;

export const unsplashApi = {
   async getPhotosByTopic(topic: string, page = 1) {
      const response = await fetch(`${baseUrl}/search/photos?page=${page}&query=${topic}&per_page=9`, {
         headers: {
            Authorization: config.getAuthorizationHeader(),
         },
      });

      if (!response.ok) {
         throw new Error(`Unsplash error: ${response.status}`);
      }

      const data: SearchResponse = await response.json();

      return { result: data.results as image[], totalPages: 10 };
   },

   async getRandomPhotos(page = 1) {
      const response = await fetch(`https://api.unsplash.com/photos/random?count=${9}`, {
         headers: {
            Authorization: config.getAuthorizationHeader(),
         },
      });

      if (!response.ok) throw new Error(`Unsplash error: ${response.status}`);

      const data: image[] = await response.json();

      return { result: data, totalPages: 10 };
   },

   async getPhotosBySearch(text: string, page = 1) {
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${text}&per_page=9`;

      const response = await fetch(url, {
         headers: {
            Authorization: config.getAuthorizationHeader(),
         },
      });

      const data: SearchResponse = await response.json();

      return { result: data.results as image[], totalPages: 10 };
   },

   async getTopics() {
      const data: Topic[] = await Promise.all(
         CATEGORY_LIST.map(async (topic) => {
            const { result } = await unsplashApi.getPhotosByTopic(topic.query);

            return {
               title: topic.title,
               type: topic.query,
               src: result[0]?.urls?.regular,
            };
         })
      );

      return data;
   },
};
