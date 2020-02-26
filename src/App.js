import React, { Component } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyled } from './style'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyled />
        <Header />
      </Provider>
    )
  }
}

export default App;
