import { Check } from 'lucide-react';
import React from 'react';

const CardFeature = ({ feature }) => {
    console.log(feature);
    return (
        
        <p className='flex gap-1 mt-1'> <Check></Check> {feature} </p>
        
    );
};

export default CardFeature;