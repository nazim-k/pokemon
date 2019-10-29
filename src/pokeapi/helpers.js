import CONFIG from '../../CONFIG';
const { pokemonImageUrl } = CONFIG;

function exctractPockemonIdFromUrl(url) {
  const regExp = /\d{1,}\/$/;
  const match = url.match(regExp);
  const id = match.index && match[0].replace('/', '');
  return +id;
}

export const getPockemonFormsFromEvolutionChain = chain => {
  const forms = [];

  return (function getForms(form = chain) {

    const id = exctractPockemonIdFromUrl(form.species.url);

    forms.push({
      name: form.species.name,
      imgSrc: pokemonImageUrl(id),
      number: id
    });

    form.evolves_to.forEach( form => getForms(form));

    return forms;

  }());

};