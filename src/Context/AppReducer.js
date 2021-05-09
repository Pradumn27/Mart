const AppReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      case 'UPDATE_TOTAL':
        return{
          total: state.total+action.payload
        }
      case 'REDUCE_TOTAL':
        return{
          total:(state.total)-(action.payload)
        }
      case 'SET_LENGTH':
        return{
          ...state,
          length: action.payload
        }
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        }
      case 'SET_SELECTED':
        return{
          ...state,
          selectedImg: action.payload
        }
      default:
        return state;
    }
  }

  export default AppReducer;