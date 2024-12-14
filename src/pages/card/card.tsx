import React from 'react'

type CardProps = {
    image: string;
    title: string;
    price: string;
    discount: string;
  };
  const Card: React.FC<CardProps> = ({ image, title, price, discount }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">Price: {price}</p>
          <p className="text-red-500 text-base">Discount: {discount}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
