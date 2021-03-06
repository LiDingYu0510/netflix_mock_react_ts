import { Movie } from "../../model/movie";
import { ActionTypes } from "../actions/actionTypes";
import { TrendingActionType } from "./trendingAction";

export interface TrendingState {
  movies?: Movie[];
}

const defaultState: TrendingState = {
  movies: [],
};

export default function (
  state = defaultState,
  action: TrendingActionType
): TrendingState {
  switch (action.type) {
    case ActionTypes.FETCH_TRENDING:
      const movies = action.payload.data.results;
      return { ...state, movies };
    default:
      return state;
  }
}
