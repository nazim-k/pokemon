import React from 'react';
import PropTypes from 'prop-types';
import PokemonAvatar from './PokemonAvatar';
import PokemonName from './PokemonName';
import PokemonNumber from './PokemonNumber';
import { FlexBox } from 'Components/StyledComponents';
import CONFIG from 'CONFIG';

const { style } = CONFIG.pokemonCard;

function PokemonCard({ imgSrc, number, name }) {
  return (
    <FlexBox as="section" center { ...style }>
      <PokemonAvatar src={ imgSrc } alt={ name }/>
      <PokemonName name={ name }/>
      <PokemonNumber number={ number }/>
    </FlexBox>
  );
}

PokemonCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default PokemonCard;