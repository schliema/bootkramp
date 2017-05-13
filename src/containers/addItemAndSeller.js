import React from 'react'
import { connect } from 'react-redux'
import { getItems, addItemAndSeller } from '../actions'


class AddItemAndSeller extends React.Component {

  componentDidMount() {
    console.log('componentDidMount')
    if (!this.props.items || this.props.items.length === 0) {
      this.props.getItems();
    }
  }

  render() {
    let itemIdInput
    let sellerNameInput
    let priceInput

    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!itemIdInput.value.trim()) {
            return
          }
          this.props.addItemAndSeller(itemIdInput.value, sellerNameInput.value, priceInput.value)
          itemIdInput.value = ''
          sellerNameInput.value = ''
          priceInput.value = ''
        }}>
        <span>
          itemId:

          <select ref={itemId => {
            itemIdInput = itemId
          }}>
            {this.props.items.map(item =>
              <option key={item.id} value={item.id}>{item.partNumber} {item.name}</option>
            )}
          </select>


        </span>
          <br/>
          <br/>
          <span>
          sellerName:
          <input ref={sellerName => {
            sellerNameInput = sellerName
          }}/>
        </span>
          <br/>
          <br/>
          <span>
          price:
          <input ref={price => {
            priceInput = price
          }}/>
        </span>
          <br/>
          <br/>
          <button type="submit">
            Add Item for Seller
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => {
      dispatch(getItems())
    },
    addItemAndSeller: (itemIdInput, sellerNameInput, priceInput) => {
      console.log('priceInput ' + priceInput)
      dispatch(addItemAndSeller(itemIdInput, sellerNameInput, priceInput))
    }
  }
}

const mapStateToProps = (state: ItemsType) => {
  return {
    items: state.items.items,
  }
}

AddItemAndSeller = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemAndSeller)

export default AddItemAndSeller