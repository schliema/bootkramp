// @flow

import { combineReducers } from 'redux'
import brands from './Brands'
import items from './Items'

const theApp = combineReducers({
  brands,
  items
})

export default theApp