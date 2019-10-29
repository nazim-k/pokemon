import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function ImageContainer({ fallback: Loader, imageComponent: Img, ...props }) {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = props.src;
    img.alt = props.alt;
    img.onload = () => setIsLoading(false);
  }, [ setIsLoading, props.src, props.alt ]);


  if (isLoading || !props.src) return <Loader/>;

  if (Img) return <Img { ...props }/>;

  return <img { ...props }/>;
}

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallback: PropTypes.func.isRequired,
  imageComponent: PropTypes.object
};

export default ImageContainer;