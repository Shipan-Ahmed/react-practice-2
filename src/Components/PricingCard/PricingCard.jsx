import React from 'react';
import CardFeature from './cardfeature';

const PricingCard = ({ pricing }) => {
    const { name, price,  features } = pricing;
    console.log(pricing);
    return (
      <div className="bg-yellow-200 border rounded-2xl p-4 flex flex-col">
        <h3 className="text-4xl">{name}</h3>
        <p className="text-2xl">{price}</p>
        <div className="mt-8 bg-amber-400 rounded-2xl p-4 text-black flex-1 ">
          {features.map((feature, index) => (
            <CardFeature key={index} feature={feature}></CardFeature>
          ))}
        </div>
        <button className="btn btn-accent w-full mt-4">Subscribe</button>
      </div>
    );
};

export default PricingCard;