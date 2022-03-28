const superheroesLodedStatus = (state) => state.superheroes.status;

const superheroesData = (state) => state.superheroes.data;

const superheroesSelectors = {
  superheroesLodedStatus,
  superheroesData,
};

export default superheroesSelectors;
