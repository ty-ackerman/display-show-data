const stats = {};

stats.getStdVar = (seasons, mean) => {
  // const n = seasons.length;
  // return Math.sqrt(seasons.map(season => ))

  const episodes = [];
  seasons.map((season) => episodes.push(...season));

  const variance =
    episodes
      .map(
        (episode) =>
          episode.imDbRating.length &&
          Math.pow(Math.abs(parseFloat(episode.imDbRating) - mean), 2)
      )
      .reduce((tot, cur) => tot + cur, 0) / episodes.length;

  const standardDev = Math.sqrt(variance);
  return {
    variance,
    standardDev,
  };
};

export default stats;
