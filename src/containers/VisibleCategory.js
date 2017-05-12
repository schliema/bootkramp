// @flow

import {connect} from 'react-redux'
import {getItems} from '../actions'
import Category from '../components/Category'
import type { ItemsType } from '../Types'

const mapStateToProps = (state: ItemsType) => {
    return {
      items: state.items.items
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => {
      dispatch(getItems())
    }
  }
}

const VisibleItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)

export default VisibleItem