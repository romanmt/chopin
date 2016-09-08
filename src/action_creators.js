require('es6-promise').polyfill();
require('isomorphic-fetch');

export function changeKey(key) {
  return {
    type: 'CHANGE_KEY',
    key
  }
}

export function fetchNotesRequest(key) {
  return {
    type: 'FETCH_NOTES_REQUEST',
    key
  }
}

export function fetchNotesFailure(key) {
  return {
    type: 'FETCH_NOTES_FAILURE',
    key,
    error: 'Error while fetching Notes'
  }
}

export function fetchNotesSuccess(key, json) {
  return {
    type: 'FETCH_NOTES_SUCCESS',
    key,
    notes: json.notes
  }
}

export function selectKey(key) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(fetchNotesRequest(key))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`/api/notes?key=${key}`)
      .then(response => response.json())
      .then(json => {

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(changeKey(key))
        dispatch(fetchNotesSuccess(key, json))
      })

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
