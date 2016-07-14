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
  }
  return state
}
