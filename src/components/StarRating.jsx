import React from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-8 h-8 cursor-pointer ${
            (hoverRating || rating) >= star ? 'text-primary-color' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => onRatingChange(star)}
        >
          <path d="M12 .587l3.668 7.435 8.21 1.193-5.932 5.777 1.4 8.168L12 18.897l-7.346 3.863 1.4-8.168-5.932-5.777 8.21-1.193z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
