import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className="animate__animated animate__pulse">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
