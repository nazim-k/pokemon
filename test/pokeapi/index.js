import { expect } from 'chai';
import chalk from 'chalk';
import { evolution } from './serverRespones';
import { getPockemonFormsFromEvolutionChain } from '../../src/pokeapi/helpers';

describe(chalk.underline.magenta('RESHAPE POKEAPI SERVER RESPONSE'), () => {

  it('Get Pokemon forms from evolution chain', () => {
    const forms = getPockemonFormsFromEvolutionChain(evolution.chain);
    expect(forms).to.have.lengthOf(3);
    expect(forms).to.deep.equal([
      { name: 'bulbasaur', imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', number: 1 },
      { name: 'ivysaur', imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', number: 2 },
      { name: 'venusaur', imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', number: 3 }
    ]);
  });

});