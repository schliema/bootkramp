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