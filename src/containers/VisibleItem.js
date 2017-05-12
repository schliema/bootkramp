// @flow

import {connect} from 'react-redux'
import {getItem, setCurrentItem} from '../actions'
import Item from '../components/Item'
import type { ItemsType } from '../Types'

const mapStateToProps = (state: ItemsType) => {
  if (state.items.currentItem.partNumber !== undefined) {
    return {
      currentItemId: state.items.currentItem.id,
      partNumber: state.items.currentItem.partNumber,
      name: state.items.currentItem.name,
      imageLocation: state.items.currentItem.imageLocation,
      seller: state.items.currentItem.seller,
      price: state.items.currentItem.price,
      itemDetails: state.items.currentItem.itemDetails,
      items: state.items.items
    }
  } else {
    return {
      currentItemId: null,
      partnumber: null,
      name: null,
      imageLocation: null,
      seller: null,
      price: null,
      itemDetails: [],
      items: state.items.items
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: (id: number) => {
      dispatch(getItem(id))
    },
    setCurrentItem: (item: any) => {
      dispatch(setCurrentItem(item))
    }
  }
}

const VisibleItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

export default VisibleItem