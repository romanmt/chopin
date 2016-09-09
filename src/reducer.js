import {Map} from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

function changeKey(state, newKey) {
  return state.set('selectedKey', newKey)
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'CHANGE_KEY':
      return changeKey(state, action.key)
    case 'FETCH_CHORDS_REQUEST':
      return state.setIn(['api','isFetching'], true)
    case 'FETCH_CHORDS_FAILURE':
      return state.setIn(['api','isFetching'], false)
                  .setIn(['api','error'], action.error)
    case 'FETCH_CHORDS_SUCCESS':
      return state.setIn(['api','isFetching'], false)
                  .set('chords', action.chords)
  }
  return state
}
