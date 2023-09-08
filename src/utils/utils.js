export const roundedToFixed = (float = 0, divider = 1, digits = 1) => {
  const numberToFix = float / divider;
  const rounder = Math.pow(10, digits);
  const rounded = (Math.round(numberToFix * rounder) / rounder).toFixed(digits);
  return rounded;
};

export const generateColor = (value) => {
  let color;
  if (value < 50) {
    color = 'red';
  } else if (value >= 50 && value < 70) {
    color = 'orange';
  } else if (value >= 70 && value < 80) {
    color = 'green';
  } else if (value >= 80) {
    color = 'blue';
  } else {
    color = '';
  }
  return color;
};

export const generateRandom = (min = 0, max = 100) => {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};

export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const result = hours + 'h ' + remainingMinutes + 'm';
  return result;
};

export const formatDate = (date) => {
  if (date !== undefined) {
    const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const [year, month, day] = date.split('-');
    const monthAbreviado = months[parseInt(month) - 1];
    return `${day} ${monthAbreviado} ${year}`;
  }
};

export const formatDateWithBarrs = (date) => {
  if (date !== undefined) {
    const partes = date.split('-');
    const dia = partes[2];
    const mes = partes[1];
    const anio = partes[0];
    return `${dia}/${mes}/${anio}`;
  }
};

export const formatYear = (date) => {
  if (date !== undefined) {
    const year = date.slice(0, 4);
    return `(${year})`;
  }
};

export const formatGenres = (genres) => {
  if (genres !== undefined) {
    genres = genres.map((genre) => genre.name);
    return <span>{genres.toString().replaceAll(',', ', ')}</span>;
  }
};

export const getProductionCountriesName = (countries) => {
  if (countries !== undefined) {
    const countryNames = countries.map((country) => country.iso_3166_1);
    const countryNameFormat = ` (${countryNames.join(', ')}) `;

    return countryNameFormat;
  }
};

export const generateRandomIndex = (data) => {
  const randomIndexes = [];

  while (randomIndexes.length < 4) {
    const randomIndex = generateRandom(0, data.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes;
};

export const getMovieDetailsFromId = (id) => {
  if (id !== undefined) {
    let filmDetail;
    const API_URL_DETAIL = process.env.REACT_APP_API_URL + '/movie/' + id + '?api_key=' + process.env.REACT_APP_API_KEY;
    fetch(API_URL_DETAIL)
      .then((response) => response.json())
      .then((data) => (filmDetail = data));
    return filmDetail;
  }
};
