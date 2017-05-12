// @flow

import type { ItemsType } from '../Types'
import type { ActionType } from '../Types'


const items = (state : ItemsType = {pending: false, error: null, items: [], currentItem: {}}, action: ActionType<string>) : ItemsType => {
  switch (action.type) {
    case 'GET_ITEM_REJECTED':
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    case 'GET_ITEM_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'GET_ITEM_FULFILLED':
      return {
        ...state,
        pending: false,
        currentItem: action.payload.data
      }
    case 'GET_ITEMS_REJECTED':
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    case 'GET_ITEMS_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'GET_ITEMS_FULFILLED':
      return {
        ...state,
        pending: false,
        items: action.payload.data
      }
    default:
      return state
  }
}

export default items