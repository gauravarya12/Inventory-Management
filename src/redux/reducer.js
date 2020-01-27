const initialState = {
  items: [],
  itemHistory: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let items = state.items
      if (items.filter(el => el.itemName===action.payload.itemName).length > 0) {
        items = items.map(el => el.itemName === action.payload.itemName ? { ...el, quantity: el.quantity + action.payload.quantity } : el)
      }
      else {
        items = [...items, action.payload]
      }
      return { ...state, items: items }
    case 'SELL_ITEM':
      let item = state.items
      item = item.map(el => el.itemName === action.payload.itemName ? { ...el, quantity: el.quantity - action.payload.quantity } : el)
      item = item.filter(el => el.quantity > 0)
      return { ...state, items: item }
    case 'ADD_HISTORY':
      return { ...state, itemHistory: [...state.itemHistory, action.payload] }
    default:
      return state
  }
}

export default reducer
