import React, { Component } from 'react'
import {connect} from 'react-redux'
import KeySelect from '../components/key_select.jsx'
import * as actionCreators from '../action_creators'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
var s = require('./chopin_app.css') 

export default class ChopinApp extends Component {
  render() {
    return <section className={s.root}>
      <div>
        <p className={s.title}>hello there, am I blue?</p>
        <KeySelect selectedKey={this.props.selectedKey} />
      </div>
    </section>
  }
}

function mapStateToProps(state) {
  return {
    selectedKey: state.selectedKey
  }
}

export const ChopinAppContainer = withStyles(s)(connect(mapStateToProps, actionCreators)
  (ChopinApp));
