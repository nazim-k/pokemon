import React from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { Img } from 'Components/StyledComponents';
import { ImageContainer } from 'Containers';
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

  return <ImageContainer
    src={ src }
    alt={ alt }
    fallback={ AvatarLoader }
    imageComponent={ Img }
  />;

}

PokemonAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PokemonAvatar;