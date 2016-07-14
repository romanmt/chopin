import React, {Component} from 'react'
import Dropdown from 'react-dropdown'

require('./key_select.css')

export default class KeySelect extends Component {
  _onSelect(option) {
    this.props.changeKey(option.value)
  }

  render() {
    return <h2>
      The Key of: 
      <Dropdown options={this.props.availableKeys.toJS()} 
                onChange={this._onSelect.bind(this)} 
                value={this.props.selectedKey} 
                placeholder="Select a Key" />
    </h2>
  }
}
