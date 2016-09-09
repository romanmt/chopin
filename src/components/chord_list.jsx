import React, {PropTypes} from 'react'

const ChordList = ({chords, isFetching}) => {

  function chordElements() {
    if(!chords) return null
    return chords.map(c => <p>{c.name}</p>)
  }

  return (
    <div>
      {chordElements()}
    </div>
  )
}

ChordList.propTypes = {
  chords: PropTypes.object.isRequired
}

export default ChordList
