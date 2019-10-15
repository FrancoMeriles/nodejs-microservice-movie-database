const defaultSettings = require("./defaultSetting");
const fetch = require("node-fetch");

require("dotenv").config();

class movieService {
  constructor({ point, sortBy, page, language }) {
    this.point = point || defaultSettings.point;
    this.sortBy = sortBy || defaultSettings.sortBy;
    this.page = page || defaultSettings.page;
    this.language = language || defaultSettings.language;
  }

  getMovies() {
    const url = `${process.env.MOVIE_DATABASE_URL}/${this.point}/movie?sort_by=${this.sortBy}&page=${this.page}&language=${this.language}`;
    return this.makeRequest(url);
  }

  getMovie(id) {
    const url = `${process.env.MOVIE_DATABASE_URL}/${this.point}/${id}?language=${this.language}`;
    return this.makeRequest(url);
  }

  searchMovie(q) {
    const url = `${process.env.MOVIE_DATABASE_URL}/${this.point}/movie?language=${this.language}&query=${q}&page=${this.page}`;
    return this.makeRequest(url);
  }

  makeRequest(url) {
    return fetch(`${url}&api_key=${process.env.SECRET_KEY}`)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.error(err));
  }
}

module.exports = movieService;
