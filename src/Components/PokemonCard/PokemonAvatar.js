import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { Img } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { avatarStyle } = CONFIG.pokemonCard;

function AvatarLoader() {
  return (
    <div style={ { padding: avatarStyle.padding } }>
      <Skeleton
        circle={ true }
        height={ avatarStyle.size }
        width={ avatarStyle.size }
      />
    </div>
  );
}

function PokemonAvatar({ src, alt }) {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.alt = alt;
    img.onload = () => setIsLoading(false);
  }, [ setIsLoading, src, alt ]);


  if (isLoading || !src) return <AvatarLoader/>;

  return <Img src={ src } alt={ alt }/>;
}

PokemonAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PokemonAvatar;