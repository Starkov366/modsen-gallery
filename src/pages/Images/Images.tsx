import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Images.scss';
import { InfoSection } from '../../components/InfoSection/InfoSection';
import { unsplashApi } from '../../api/unplash';
import { ImageCard } from '../../components/ImageCard/ImageCard';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';

export type image = {
  alt: string;
  urls: { small: string };
  id: string;
  description: string;
  alt_description: string;
};

export function Images() {
  const [images, setImages] = useState<image[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const search = searchParams.get('category') || '';

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  async function loadImages() {
    setIsLoading(true);
    try {
      const { result, totalPages } =
        searchValue.length > 0
          ? await unsplashApi.getPhotosBySearch(searchValue, page)
          : search
            ? await unsplashApi.getPhotosByTopic(search, page)
            : await unsplashApi.getRandomPhotos(page);

      setImages(
        result.map((item: any) => ({
          alt: item.alt,
          urls: item.urls,
          id: item.id,
          description: item.description,
          alt_description: item.alt_description,
        }))
      );

      setTotalPages(totalPages);
    } catch (e) {
      console.error('Unsplash error:', e);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    loadImages();
    console.log(images);
  }, [search, page]);
  useEffect(() => {
    const time = setTimeout(() => {
      loadImages();
    }, 1000);
    return () => clearInterval(time);
  }, [searchValue]);
  return (
    <div className="images">
      <InfoSection searchValue={searchValue} handleSearch={handleSearch} />
      <Filter />
      <Loader isLoading={isLoading}></Loader>
      <div className="images__list">
        {images.map((item) => (
          <ImageCard key={item.id} {...item} isLike={false} />
        ))}
      </div>
      <Pagination totalPages={totalPages} setPage={setPage} page={page}></Pagination>
    </div>
  );
}
