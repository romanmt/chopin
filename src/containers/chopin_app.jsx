import React, { Component } from 'react'
import { connect } from 'react-redux'
import KeySelect from '../components/key_select.jsx'
import ChordList from '../components/chord_list.jsx'
import * as ActionCreators from '../action_creators'
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: { },
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: 'all',
});

export default class ChopinApp extends Component {
  render() {
    return <section>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <KeySelect selectedKey={this.props.selectedKey}
                     availableKeys={this.props.availableKeys}
                     isFetching={this.props.isFetching}
                     onChangeKey={this.props.onChangeKey} />
          <ChordList chords={this.props.chords} />
        </div>
      </MuiThemeProvider>
    </section>
  }
}

const mapStateToProps = (state) => {
  return {
    selectedKey: state.get('selectedKey'),
    availableKeys: state.get('availableKeys'),
    chords: state.get('chords'),
    isFetching: state.getIn(['api', 'isFetching'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeKey: (key) => {
      dispatch(ActionCreators.selectKey(key))
    }
  }
}

export const ChopinAppContainer = connect(mapStateToProps, mapDispatchToProps)
  (ChopinApp);
