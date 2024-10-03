import { TMDB_RESOURCE, ROUTE, MOVIE_LIST_TYPE } from "../constant.js";

export const generateMovieList = (moviesData, listType) => {
  const movieListHTML = moviesData.map((movie) =>
    generateMovieItem(movie, listType)
  );

  return movieListHTML.join("");
};

export const generateMovieItem = (movie, listType) => {
  const movieDetailPath = ROUTE.MOVIE_DETAIL(movie.id, listType);
  const thumbnailURL = TMDB_RESOURCE.IMAGE.THUMBNAIL_URL + movie.poster_path;
  const averageScore = movie.vote_average.toFixed(1);

  return /*html*/ `
    <li>
      <a href=${movieDetailPath}>
        <div class="item">
          <img
            class="thumbnail"
            src=${thumbnailURL}
            alt=${movie.title}
          />
          <div class="item-desc">
            <p class="rate"><img src="/assets/images/star_empty.png" class="star" alt="별점" /><span>${averageScore}</span></p>
            <strong>${movie.title}</strong>
          </div>
        </div>
      </a>
    </li>
  `;
};

export const generateTopRatedContainer = (movie, listType) => {
  const movieDetailPath = ROUTE.MOVIE_DETAIL(movie.id, listType);
  const bannerURL = TMDB_RESOURCE.IMAGE.BANNER_URL + movie.backdrop_path;
  const averageScore = movie.vote_average.toFixed(1);

  return /*html*/ `
    <div class="background-container" style="background-image: url('${bannerURL}')">
      <div class="overlay" aria-hidden="true"></div>
      <div class="top-rated-container">
        <h1 class="logo"><img src="/assets/images/logo.png" alt="MovieList" /></h1>
        <div class="top-rated-movie">
          <div class="rate">
            <img src="/assets/images/star_empty.png" class="star" />
            <span class="rate-value">${averageScore}</span>
          </div>
          <div class="title">${movie.title}</div>
          <a href=${movieDetailPath}>
            <button class="primary detail" >자세히 보기</button>
          </a>
        </div>
      </div>
    </div>
  `;
};

export const generateMovieListTabHTML = (listType) => {
  const movieListTabHTML = Object.values(MOVIE_LIST_TYPE).map((ITEM) => {
    return /*html*/ `
      <li>
        <a href=${ROUTE.MOVIE_LISTS[ITEM.TYPE]}>
          <div class="tab-item ${listType === ITEM.TYPE && "selected"}">
            <h3>${ITEM.TAB_NAME}</h3>
          </div>
        </a>
      </li>
    `;
  });

  return /*html*/ `
    <ul class="tab">
      ${movieListTabHTML.join("")}
    </ul>
  `;
};
