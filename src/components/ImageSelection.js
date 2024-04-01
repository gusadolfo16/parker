import React from 'react';

const ImageSelection = ({ imageUrl, onSelected }) => {
  return (
    <div className="image-selection">
      <img src={imageUrl} alt="Selected Image" />
      <div className="image-selection-actions">
        <button onClick={() => onSelected(imageUrl)}>Select/Unblock</button>
        {/* Add button for additional actions (optional) */}
      </div>
    </div>
  );
};

export default ImageSelection;
