import * as actionTypes from './constants';

export const searchFocus = () => {
  return {
    type: actionTypes.SEARCH_FOCUS
  }
}

export const searchBlur = () => {
    return {
      type: actionTypes.SEARCH_BLUR
    }
  }