import React, {createClass} from 'react'

export default createClass({

  render: function() {
    return <p>
      The Key of: {this.props.selectedKey} 
    </p>
  }
})
