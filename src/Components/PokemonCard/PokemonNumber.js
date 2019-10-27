import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Paragraph } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { numberPrefix } = CONFIG.pokemonCard;

function PokemonNumber({ number }) {

  if (number) return (
    <Paragraph bold margin="10px 0">
      { `${ numberPrefix } ${ number }` }
    </Paragraph>
  );

  return (
    <div style={ { margin: '10px 0' } }>
      <Skeleton height="1em" width="40px"/>
    </div>
  );
}

PokemonNumber.propTypes = {
  number: PropTypes.number
};

export default PokemonNumber;