

export type BrandType = {
  index: number,
  name: string,
  imageLocation: string
}

export type BrandsType = {
  pending: boolean,
  error: any,
  brands: BrandType[],
  currentbrand: BrandType
}

export type ActionType <T> = {
  type: string,
  payload: T
}

export type ItemsType = {
  pending: boolean,
  error: any,
  items: ItemType[],
  currentItem: ItemType
}

export type ItemType = {
  id: number,
  partNumber: string,
  name: string,
  imageLocation: string,
  itemDetails: ItemDetailsType[]
}

export type ItemDetailsType = {
  name: string,
  vaue: string
}