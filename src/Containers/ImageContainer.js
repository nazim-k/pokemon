import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ImageContainer({ src, alt, fallback: Loader, imageComponent: Img, ...props }) {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.alt = alt;
    img.onload = () => setIsLoading(false);
  }, [ setIsLoading, src, alt ]);


  if (isLoading || !src) return <Loader/>;

  if (Img) return <Img src={ src } alt={ alt } { ...props }/>;

  return <img src={ src } alt={ alt } { ...props }/>;
}

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallback: PropTypes.func.isRequired,
  imageComponent: PropTypes.object
};

export default ImageContainer;