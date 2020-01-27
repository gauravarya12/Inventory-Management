export const addItem = (data) => ({ type: 'ADD_ITEM', payload: data })
export const sellItem = (data) => {
  return { type: 'SELL_ITEM', payload: data }
}
export const addHistory = (data) => ({ type: 'ADD_HISTORY', payload: data })
