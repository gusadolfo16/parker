import React, { useState, useEffect, useMemo } from 'react';
import { useFirebase } from '../utils/useFirebase'; // Import the custom hook
import Image from 'next/image';
import FilterBar from './FilterBar';

const Gallery = ({ user, onImageSelected, onImageUnselected, selectedImages, selectedFilter }) => {
  const [images, setImages] = useState([]);
  const firebase = useFirebase(); // Access the initialized Firebase instance

  useEffect(() => {
    const fetchImages = async () => {
      if (!user || !firebase) return; // Only fetch if user is logged in and Firebase is initialized

      const listRef = firebase.storage().ref().child(`user-images/${user.uid}`);
      // ... rest of your image fetching logic using firebase.storage()
    };

    fetchImages();
  }, [user, firebase]);

  const filteredImages = useMemo(() => {
    if (selectedFilter === 'all') {
      return images;
    } else {
      return images.filter((image) => image.metadata.category === selectedFilter); // Example filter logic
    }
  }, [images, selectedFilter]);

  const handleImageClick = (imageUrl, isSelected) => {
    if (isSelected) {
      onImageUnselected(imageUrl);
    } else {
      onImageSelected(imageUrl);
    }
  };

  return (
    <div className="gallery-container">
      <FilterBar onFilterChange={(filter) => setSelectedFilter(filter)} />
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div key={image.url} className={`gallery-item ${selectedImages.has(image.url) ? 'selected' : ''}`}>
            <Image src={image.url} alt="Gallery Image" onClick={() => handleImageClick(image.url, selectedImages.has(image.url))} />
            {selectedImages.has(image.url) && <button onClick={() => handleImageClick(image.url, true)}>Unblock</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
