import React, { Component } from 'react'
import {connect} from 'react-redux'
import KeySelect from './key_select'
import * as actionCreators from '../action_creators'

export default class ChopinApp extends Component {
  render() {
    return <section className='chopin-app'>
      <div>
        <KeySelect selectedKey={this.props.selectedKey}
                   availableKeys={this.props.availableKeys}
                   changeKey={this.props.changeKey}/>
      </div>
    </section>
  }
}

function mapStateToProps(state) {
  return { 
    selectedKey: state.get('selectedKey'),
    availableKeys: state.get('availableKeys')
  }
}

export const ChopinAppContainer = connect(mapStateToProps, actionCreators)
  (ChopinApp);
