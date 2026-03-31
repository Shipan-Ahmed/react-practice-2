import { ProjectorIcon } from 'lucide-react';
import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOptions = ({ pricingPromises }) => {
    const pricingData = use(pricingPromises);
    // console.log(pricingData);
    return (
      <div>
        <h2 className='text-6xl text-center mt-8'>Get our membership</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {/* {
                    pricingData.pricing.map((pricing) => (
                    <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
                ))} */}
                {
                    pricingData.pricing.map(pricing=> <DaisyCard key={pricing.id} pricing={pricing}></DaisyCard>)
                }
        </div>
      </div>
    );
};

export default PricingOptions;