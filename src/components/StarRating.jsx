import React from 'react';
 
const StarRating = ({ rating, onRatingChange, editable = true }) => {
  const handleClick = (newRating) => {
    if (editable && onRatingChange) {
      onRatingChange(newRating);
    }
  };
 
  return (
    <div className="flex"> {/* Añadido 'flex' para la disposición horizontal */}
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={star <= rating ? '#4CAF50' : '#e4e5e9'}
          onClick={() => handleClick(star)}
          style={{ cursor: editable ? 'pointer' : 'default' }}
        >
          <path d="M12 .587l3.668 7.425 8.2 1.193-5.92 5.766 1.398 8.162L12 18.897l-7.346 3.866 1.398-8.162L.132 9.205l8.2-1.193L12 .587z" />
        </svg>
      ))}
    </div>
  );
};
 
export default StarRating;
