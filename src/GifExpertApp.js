import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GiftGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
