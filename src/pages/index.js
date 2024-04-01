import FilterBar from '../FilterBar'; // Import FilterBar component
import React, { useState, useEffect } from 'react';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import { getUser } from '../utils/auth'; // Import getUser
import ImageSelection from '../components/ImageSelection'; // Import ImageSelection

const Home = () => {
  const [user, setUser] = useState(null);
  const [selectedImages, setSelectedImages] = useState(new Set()); // Track selected images globally
  const [selectedFilter, setSelectedFilter] = useState('all'); // Track selected filter

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  const handleImageSelected = (imageUrl) => {
    setSelectedImages((prevSelected) => new Set([...prevSelected, imageUrl]));
  };

  const handleImageUnselected = (imageUrl) => {
    setSelectedImages((prevSelected) => {
      const newSelected = new Set(prevSelected);
      newSelected.delete(imageUrl);
      return newSelected;
    });
  };

  return (
    <div>
      <Navbar user={user} />
      {user ? (
        <>
          <FilterBar onFilterChange={(filter) => setSelectedFilter(filter)} />
          <Gallery
            user={user}
            onImageSelected={handleImageSelected}
            onImageUnselected={handleImageUnselected}
            selectedImages={selectedImages}
            selectedFilter={selectedFilter}
          />
          {selectedImages.size > 0 && (
            <ImageSelection imageUrl={Array.from(selectedImages)[0]} onSelected={handleImageUnselected} />
          )}
        </>
      ) : (
        <div>Please log in to view the gallery.</div>
      )}
    </div>
  );
};

export default Home;
