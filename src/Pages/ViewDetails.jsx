import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            ViewDetails
            ViewDetails
        </div>
    );
};

export default ViewDetails;