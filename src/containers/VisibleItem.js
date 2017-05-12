// @flow

import {connect} from 'react-redux'
import {getItem} from '../actions'
import Item from '../components/Item'
import type { ItemsType } from '../Types'

const mapStateToProps = (state: ItemsType) => {
  if (state.items.currentItem.partNumber !== undefined) {
    return {
      currentItemId: state.items.currentItem.id,
      partNumber: state.items.currentItem.partNumber,
      name: state.items.currentItem.name,
      imageLocation: state.items.currentItem.imageLocation,
      itemDetails: state.items.currentItem.itemDetails
    }
  } else {
    return {
      currentItemId: null,
      partnumber: null,
      name: null,
      imageLocation: null,
      itemDetails: []
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: (id: number) => {
      dispatch(getItem(id))
    }
  }
}

const VisibleItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)

export default VisibleItem