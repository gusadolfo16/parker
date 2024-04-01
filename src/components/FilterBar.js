import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterSelect = (event) => {
    setSelectedFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div className="filter-bar">
      <select value={selectedFilter} onChange={handleFilterSelect}>
        <option value="all">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more filter options as needed */}
      </select>
    </div>
  );
};

export default FilterBar;
