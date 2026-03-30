import React from 'react';

const Links = ({data}) => {
    return (
        <li className='ml-4' ><a href={data.path}>{ data.name}</a></li>
    );
};

export default Links;