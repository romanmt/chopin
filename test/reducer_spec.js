import {expect} from 'chai'
import {Map, List, fromJS} from 'immutable'

import reducer from '../src/reducer'

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = Map()
    const action = {
      type: 'SET_STATE',
      state: Map({
        selectedKey: 'C',
        availableKeys: List.of([
          'A', 'B', 'C', 'D', 'E', 'F', 'G'
        ])
      })
    }

    const nextState = reducer(initialState, action)

    expect(nextState).to.eql(action.state)
  })
})
