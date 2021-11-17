import { NUMBER_MOVIES_TO_ADD_SMALL,
  NUMBER_MOVIES_TO_ADD_MEDIUM,
  NUMBER_MOVIES_TO_ADD_LARGE,
  NUMBER_MOVIES_SMALL,
  NUMBER_MOVIES_MEDIUM,
  NUMBER_MOVIES_LARGE,
  SIZE_WIDTH_MEDIUM,
  SIZE_WIDTH_LARGE,} from '../config/constants.js'

export default function moviesCount() {
  const innerWidth = window.innerWidth;

  if (innerWidth >= SIZE_WIDTH_LARGE) {
    return {
      moviesCount: NUMBER_MOVIES_LARGE,
      newMoviesCount: NUMBER_MOVIES_TO_ADD_LARGE,
    };
  } else if (innerWidth >= SIZE_WIDTH_MEDIUM && innerWidth < SIZE_WIDTH_LARGE) {
    return {
      moviesCount: NUMBER_MOVIES_MEDIUM,
      newMoviesCount: NUMBER_MOVIES_TO_ADD_MEDIUM,
    };
  } else {
    return {
      moviesCount: NUMBER_MOVIES_SMALL,
      newMoviesCount: NUMBER_MOVIES_TO_ADD_SMALL,
    };
  }
}
