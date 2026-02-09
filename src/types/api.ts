import { image } from 'types/images';
export type SearchResponse = {
   results: image[];
};

export type Topic = {
   title: string;
   type: string;
   src?: string;
};
