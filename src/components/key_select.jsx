import React, {PropTypes} from 'react'
import {each} from 'lodash'
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const KeySelect = ({selectedKey, availableKeys, onChangeKey}) => {

  function handleChange(event, index, value) {
    onChangeKey(value)
  }

  return (
    <div>
      <p> The Key of: {selectedKey} </p>
      <SelectField id='key-select' value={selectedKey} onChange={handleChange}>
        { availableKeys.map(k => {
            return <MenuItem key={k} primaryText={k} value={k}/>
          })
        }
      </SelectField>
    </div>
  );
}

KeySelect.propTypes = {
  selectedKey: PropTypes.string.isRequired,
  availableKeys: PropTypes.object.isRequired,
  onChangeKey: PropTypes.func.isRequired
}

export default KeySelect
