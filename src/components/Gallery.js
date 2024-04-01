import React, { useState, useEffect } from 'react';
import firebase from '../firebaseConfig';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      // Obtener imágenes desde Firebase Storage
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div>
        {/* Mostrar imágenes */}
      </div>
    </div>
  );
};

export default Gallery;
