// @flow

import type { ItemsType } from '../Types'
import type { ActionType } from '../Types'


function addItemAndSeller(state: any, action: any) {

  let newItem = null

  state.items.map(item => {
    if (item.id === action.itemId) {
      newItem = item
    }
  })

  const seller = {
    "name": action.sellerName,
    "address1": "Breukelaarweg 23",
    "address2": "7051 DW, Varsseveld",
    "telephone": "123-456",
    "email": "preowned@munsterman.nl",
    "rating": "5",
    "price": 1878.10,
    "url": "www.munsterman.nl"
  }

  const newId = state.items.length + 1


  newItem = {
    ...newItem,
    id: newId.toString(),
    seller
  }

  const items = [
    ...state.items,
    newItem
  ]

  return {
    ...state,
    items
  }
}

function setCurrentItem(state, action) {
  console.log('whoopie')
  return {
    ...state,
    currentItem: action.item
  }

}

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
    case 'ADD_ITEM_AND_SELLER':
      return addItemAndSeller(state, action)
    case 'SET_CURRENT_ITEM':
      return setCurrentItem(state, action)
    default:
      return state
  }
}

export default items