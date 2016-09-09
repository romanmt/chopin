import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import chopinApp from './reducer.js'
import {ChopinAppContainer} from 'containers/chopin_app.jsx'
import {renderToString} from 'react-dom/server'
import WithStyles from 'containers/with_styles.jsx'
import {isEmpty} from 'lodash'
import {fromJS} from 'immutable'
import api from './api.js'

const app = Express()
const port = 3000

app.use('/api', api)
app.use(Express.static('assets'));
app.get('*', handleRender)

function handleRender(req, res) {

  const css = [] // CSS for all rendered React components

  let initialState = fromJS({
    selectedKey: '',
    availableKeys: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    chords: [],
    api: {
      isFetching: false
    }
  })

  const store = createStore(chopinApp, initialState)

  const html = renderToString(
    <Provider store={store}>
      <WithStyles onInsertCss={(styles) => {
          css.push(styles._getCss())
        }
      }>
        <ChopinAppContainer />
      </WithStyles>
    </Provider>
  )

  const finalState = store.getState()
  let fullPage = renderFullPage(html, css, finalState)
  res.send(fullPage)
}

function renderFullPage(html, css, state) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <style type="text/css">${css.join('')}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="http://localhost:8080/assets/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
