import { ProjectorIcon } from 'lucide-react';
import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromises }) => {
    const pricingData = use(pricingPromises);
    console.log(pricingData);
    return (
      <div>
        <h2 className='text-6xl text-center mt-8'>Get our membership</h2>
        <div className='grid md:grid-cols-3 gap-4 p-4'>
                {
                    pricingData.pricing.map((pricing) => (
                    <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
                ))}
        </div>
      </div>
    );
};

export default PricingOptions;