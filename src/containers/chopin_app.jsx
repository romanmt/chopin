import React, { Component } from 'react'
import { connect } from 'react-redux'
import KeySelect from '../components/key_select.jsx'
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
    return <section style={styles.root}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <KeySelect selectedKey={this.props.selectedKey}
                     availableKeys={this.props.availableKeys}
                     onChangeKey={this.props.onChangeKey} />
          <p style={styles.title}>hello there, am I blue?</p>
        </div>
      </MuiThemeProvider>
    </section>
  }
}

const mapStateToProps = (state) => {
  return {
    selectedKey: state.get('selectedKey'),
    availableKeys: state.get('availableKeys')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeKey: (key) => {
      dispatch(ActionCreators.changeKey(key))
    }
  }
}

const styles = {
  "font-family": "'Roboto', sans-serif",
  root: {padding: '10px'},
  title: {color: 'red'}
}

export const ChopinAppContainer = connect(mapStateToProps, mapDispatchToProps)
  (ChopinApp);
