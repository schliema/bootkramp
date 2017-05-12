// @flow

import * as React from 'react'
import { render }  from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import promise from 'redux-promise-middleware'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import brandApp from './reducers'
import App from './App'
import Home from './Home'
import Category from './CategoryPage'
import ItemPage from './ItemPage'
import BrandPage from './BrandPage'
import PageWrapper from './components/PageWrapper'
import Tab from './components/Tab'
import Tabs from './components/Tabs'

const middleWare = [promise()]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    brandApp,
    composeEnhancers(
      applyMiddleware(...middleWare)
  )
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <PageWrapper>
          <Tabs>
            <Tab><Link to='/home'>Home</Link></Tab>
            <Tab><Link to='/category'>Hydraulics & Transmission</Link></Tab>
            <Tab><Link to='/category'>Garden Parts</Link></Tab>
            <Tab><Link to='/brands'>Brands</Link></Tab>
          </Tabs>
          <Route path='/home' component={Home}/>
          <Route path='/brands' component={App}/>
          <Route path='/category' component={Category}/>
          <Route path='/item/:item' component={ItemPage}/>
          <Route path='/brand/:brand' component={BrandPage}/>
      </PageWrapper>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
