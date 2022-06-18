import { combineReducers } from "redux";
import actMoviesReducer from "./actMovies/actMoviesReducer";
import comedyMoviesReducer from "./comedyMovies/comedyMoviesReducer";
import horrorMoviesReducer from "./horrorMovies/horrorMoviesReducer";
import romanceMoviesReducer from "./romanceMovies/romanceMoviesReducer";
import topRateReducer from "./topRate/topRateReducer";
import TrendingReducer from "./trending/trendingReducer";

const rootReducer = combineReducers({
  trending: TrendingReducer,
  topRated: topRateReducer,
  actionMovies: actMoviesReducer,
  comedyMovies: comedyMoviesReducer,
  horrorMovies: horrorMoviesReducer,
  romanceMovies: romanceMoviesReducer,
});

export default rootReducer;
