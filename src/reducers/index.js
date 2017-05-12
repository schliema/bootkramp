// @flow

import { combineReducers } from 'redux'
import brands from './Brands'
import items from './Items'

const brandApp = combineReducers({
  brands,
  items
})

export default brandApp