import React from 'react';
import Lottie from 'react-lottie';
import defaultOptions from './animationData';

const Loader = () => (
    <Lottie
        options={defaultOptions}
        height={100}
        width={100}
    />
);

export default Loader;
