import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Images.scss';
import { InfoSection } from '../../components/InfoSection/InfoSection';
import { unsplashApi } from '../../api/unplash';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { Filter } from '../../components/Filter/Filter';
export type image = {
  alt: string;
  urls: { full: string };
  id: string;
  description: string;
  alt_description: string;
};
export function Images() {
  const [images, setImages] = useState<image[]>([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('category') || '';

    async function loadImages() {
      try {
        const data = await unsplashApi.getPhotosByTopic(search);
        setImages(
          data.map((item: any, index: number) => {
            return {
              alt: item.alt,
              urls: item.urls,
              id: item.id,
              description: item.description,
              alt_description: item.alt_description,
            };
          })
        );
        console.log(data);
      } catch (e) {
        console.error('Unsplash error:', e);
      }
    }

    if (search) {
      loadImages();
    }
  }, [searchParams]);
  return (
    <div className="images">
      <InfoSection></InfoSection>
      <Filter></Filter>
      <div className="images__list">
        {images.map((item) => {
          return (
            <ImageCard
              key={item.id}
              description={item.description}
              urls={item.urls}
              alt={item.alt}
              isLike={false}
              id={item.id}
              alt_description={item.alt_description}
            ></ImageCard>
          );
        })}
      </div>
    </div>
  );
}
