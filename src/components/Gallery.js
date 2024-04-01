import React, { useState, useEffect } from 'react';
import { storage } from '../firebaseConfig'; // Import storage instance
import { useMemo } from 'react'; // For memoized filter function

const Gallery = ({ user, onImageSelected, onImageUnselected, selectedImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!user) return; // Only fetch if user is logged in

      const listRef = storage.ref().child(`user-images/${user.uid}`);
      const images = await listRef.listAll(); // Get a list of all image references for the user

      const imageUrls = await Promise.all(
        images.items.map(async (imageRef) => {
          const imageUrl = await getDownloadURL(imageRef);
          return { url: imageUrl, selected: false, metadata: {} }; // Add metadata property
        })
      );

      setImages(imageUrls);
    };

    fetchImages();
  }, [user]);

  const filteredImages = useMemo(() => {
    // Implement your filtering logic here based on selected filter and image metadata
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
            <img src={image.url} alt="Gallery Image" onClick={() => handleImageClick(image.url, selectedImages.has(image.url))} />
            {selectedImages.has(image.url) && <button onClick={() => handleImageClick(image.url, true)}>Unblock</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
