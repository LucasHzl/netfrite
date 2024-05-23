import React, { useEffect, useLayoutEffect, useState } from 'react';


export default function HeroBanner({ background }) {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 250);

        return () => clearTimeout(timer);
    }, [background]);

    if (!showImage) {
        return null;
    }

    return (
        <img className="w-screen h-full flex justify-center items-center mb-12" src={`https://image.tmdb.org/t/p/original${background.backdrop_path}`} />
    );
}
