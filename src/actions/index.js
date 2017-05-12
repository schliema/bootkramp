// @flow

import * as Axios from 'axios'
import type { ActionType } from '../Types'

export const getBrands = () : ActionType => ({
  type: 'GET_BRANDS',
  payload: Axios.get('http://localhost:3006/brands')
})

export const getOneBrand = (brand: string) : ActionType => ({
  type: 'GET_ONE_BRAND',
  payload: Axios.get('http://localhost:3006/brands/' + brand)
})

export const getItem = (id:  number) : ActionType => ({
  type: 'GET_ITEM',
  payload: Axios.get('http://localhost:3006/items/' + id)
})

export const getItems = () : ActionType => ({
  type: 'GET_ITEMS',
  payload: Axios.get('http://localhost:3006/items/')
})