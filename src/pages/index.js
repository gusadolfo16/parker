import React, { useState, useEffect } from 'react';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import { getUser } from '../utils/auth'; // Import getUser

const Home = () => {
  const [user, setUser] = useState(null);
  const [selectedImages, setSelectedImages] = useState(new Set()); // Track selected images globally
  const [selectedFilter, setSelectedFilter
