import React, {PropTypes} from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const KeySelect = ({selectedKey, availableKeys, onChangeKey}) => {

  function handleChange(event, index, value) {
    onChangeKey(value)
  }

  return (
    <SelectField id='key-select' value={selectedKey} onChange={handleChange}>
      { availableKeys.map(k => {
          return <MenuItem key={k} primaryText={k} value={k}/>
        })
      }
    </SelectField>
  );
}

KeySelect.propTypes = {
  selectedKey: PropTypes.string.isRequired,
  availableKeys: PropTypes.object.isRequired,
  onChangeKey: PropTypes.func.isRequired
}

export default KeySelect
