require('es6-promise').polyfill();
require('isomorphic-fetch');

export function changeKey(key) {
  return {
    type: 'CHANGE_KEY',
    key
  }
}

export function fetchChordsRequest(key) {
  return {
    type: 'FETCH_CHORDS_REQUEST',
    key
  }
}

export function fetchChordsFailure(key) {
  return {
    type: 'FETCH_CHORDS_FAILURE',
    key,
    error: 'Error while fetching Notes'
  }
}

export function fetchChordsSuccess(key, json) {
  return {
    type: 'FETCH_CHORDS_SUCCESS',
    key,
    chords: json.chords
  }
}

export function selectKey(key) {

  return function (dispatch) {

    dispatch(fetchChordsRequest(key))

    return fetch(`/api/chords?key=${key}`)
      .then(response => response.json())
      .then(json => {

        dispatch(changeKey(key))
        dispatch(fetchChordsSuccess(key, json))

      })
  }
}
