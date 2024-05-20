import React from 'react';
import Card from '../card/card';

const Home: React.FC = () => {
    const sampleData = [
        {
            image: 'https://via.placeholder.com/150',
            title: 'Sample Product 1',
            price: '$20.00',
            discount: '10% off',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Sample Product 2',
            price: '$25.00',
            discount: '15% off',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Sample Product 3',
            price: '$30.00',
            discount: '20% off',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Sample Product 4',
            price: '$35.00',
            discount: '25% off',
        },{
            image: 'https://via.placeholder.com/150',
            title: 'Sample Product 1',
            price: '$20.00',
            discount: '10% off',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Sample Product 2',
            price: '$25.00',
            discount: '15% off',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Sample Product 3',
            price: '$30.00',
            discount: '20% off',
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Sample Product 4',
            price: '$35.00',
            discount: '25% off',
        },
    ];

    return (
        <div className="home-container p-4">
            <h1 className="text-3xl font-bold underline mb-4">Home Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sampleData.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
        </div>
    );
};

export default Home;
