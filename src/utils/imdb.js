import axios from "axios";
import stats from "./statistics";

const imdb = {};

imdb.DAY = 86400000;
imdb.runningRegex = /[0-9]{4}\S\D/g;
imdb.idRegex = /\w+$/g;
imdb.isShowRegex = /\w+/g;

// STEP 1 - Gets the show titles + info from IMDB
imdb.getShowRequest = async (q, key = 1, max = 4) => {
  const varName = `REACT_APP_IMDB_API_KEY${key}`;
  const data = await axios.get(
    `https://imdb-api.com/en/API/SearchSeries/${`${process.env[varName]}`}/${q}`
  );
  if (data.data.errorMessage.length > 0) {
    if (key === max) {
      return false;
    } else {
      return await imdb.getShowRequest(q, key + 1);
    }
  }

  return data;
};

imdb.getShow = async (q) => {
  const data = await imdb.getShowRequest(q);
  return data.data.results.filter((show) => {
    const [year, , type] = show.description.match(imdb.isShowRegex);
    show.year = year;
    return type === "Series";
  });
};

// STEP 2 - User selects show -> Check MongoDB for series
imdb.queryDbForShow = async (imdbId) => {
  const show = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/shows/imdb/${imdbId}`
  );
  return show.data.data;
};

// STEP 3 -  Check to see if show is updated in MongoDB
imdb.isUpdated = (lastUpdated, fullTitle) => {
  const updatedRecently =
    parseInt(lastUpdated) + imdb.DAY * 7 > new Date().getTime();
  // temporarily removed stillRunning to limit the amount of requests
  // const stillRunning = fullTitle.match(imdb.runningRegex);
  return updatedRecently;
};

// OPTION A - Show is not in MongoDB -> Step 2 = []
imdb.addShow = async (show) => {
  const res = await axios.post("/shows", { show });
  const { data } = res.data;
  const updatedShow = await imdb.updateShow(data.id, data._id);
  return updatedShow;
};

// OPTION B - Show is in MongoDB, but out of date -> second fuction false

imdb.updateShow = async (imdbId, _id) => {
  const { seasons, fullTitle } = await imdb.getSeasons(imdbId);
  const updatedShow = await imdb.addSeasons(_id, seasons, fullTitle);
  return updatedShow;
};

// Extra functions

imdb.getSeasons = async (imdbId, i = 1) => {
  const seasons = [];
  let season = await imdb.getEpisodes(imdbId, i);
  const { fullTitle } = season;
  while (season.episodes.length) {
    seasons.push(season.episodes);
    i++;
    season = await imdb.getEpisodes(imdbId, i);
  }
  console.log(seasons);
  return { seasons, fullTitle };
};

imdb.getEpisodesRequest = async (imdbId, season, key = 1, max = 4) => {
  const varName = `REACT_APP_IMDB_API_KEY${key}`;
  const data = await axios.get(
    `https://imdb-api.com/en/API/SeasonEpisodes/${process.env[varName]}/${imdbId}/${season}`
  );
  if (!data.data.episodes) {
    if (key === max) {
      return false;
    } else {
      return await imdb.getEpisodesRequest(imdbId, season, key + 1);
    }
  }
  return data;
};

imdb.getEpisodes = async (imdbId, season) => {
  // gets a list of all episodes in a season
  const res = await imdb.getEpisodesRequest(imdbId, season);
  return res.data;
};

imdb.addSeasons = async (_id, seasons, fullTitle) => {
  const res = await axios.patch(
    `${process.env.REACT_APP_BACKEND_URL}/shows/seasons`,
    {
      _id,
      seasons,
      fullTitle,
      lastUpdated: new Date().getTime(),
    }
  );
  return res.data.data;
};

imdb.getStats = (seasons = []) => {
  let count = 0;
  let max = 0;
  let min = 10;
  let longestSeason = 0;
  const total = seasons.reduce((tot, episodes) => {
    longestSeason =
      episodes.length > longestSeason ? episodes.length : longestSeason;
    const sum = episodes.reduce((tot, cur) => {
      const rating = parseFloat(cur.imDbRating);
      if (rating > max) {
        max = rating;
      }
      if (rating < min) {
        min = rating;
      }
      if (!isNaN(rating)) {
        count++;
        return tot + rating;
      }
      return tot;
    }, 0);
    return tot + sum;
  }, 0);
  const average = total / count;

  const { standardDev, variance } = stats.getStdVar(seasons, average);

  return {
    average,
    max,
    min,
    longestSeason,
    standardDev,
    variance,
  };
};

export default imdb;
