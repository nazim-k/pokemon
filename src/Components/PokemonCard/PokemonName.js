import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Title } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { namePrefix } = CONFIG.pokemonCard;

function PokemonName ({ name }) {

  if (name) return (
    <Title as="h3" margin="0">
      { `${namePrefix} ${name}` }
    </Title>
  );

  return <Skeleton height="1.2em" width="120px"/>;
}

PokemonName.propTypes = {
  name: PropTypes.string
};

export default PokemonName;