import React, { Component } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyled } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyled />
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
