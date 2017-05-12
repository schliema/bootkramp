import React from 'react'
import { connect } from 'react-redux'
import { addItemAndSeller } from '../actions'

let AddItemAndSeller = ({ dispatch }) => {
  let itemIdInput
  let sellerNameInput

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!itemIdInput.value.trim()) {
          return
        }
        dispatch(addItemAndSeller(itemIdInput.value, sellerNameInput.value))
        itemIdInput.value = ''
        sellerNameInput.value = ''
      }}>
        <span>
          itemId:
          <input ref={itemId => {
            itemIdInput = itemId
          }} />
        </span>
        <span>
          sellerName:
          <input ref={sellerName => {
            sellerNameInput = sellerName
          }} />
        </span>
        <button type="submit">
          Add Item for Seller
        </button>
      </form>
    </div>
  )
}
AddItemAndSeller = connect()(AddItemAndSeller)

export default AddItemAndSeller