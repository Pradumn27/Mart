import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  products: [],
  length:0,
  total:0,
  selectedImg : "" 
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addItem(id) {
    dispatch({
      type: 'ADD_ITEM',
      payload: id
    });
  }

  function setProducts(products) {
    dispatch({
      type: 'SET_PRODUCTS',
      payload: products
    })
  }

  function setLength(length){
    dispatch({
      type: 'SET_LENGTH',
      payload: length
    })
  }

  function setSelectedImg(image){
    dispatch({
      type:"Set_SELECTED",
      payload: image
    })
  }

  function updateTotal(tot){
    dispatch({
      type:"UPDATE_TOTAL",
      payload:tot
    })
  }

  function reduceTotal(tot){
    dispatch({
      type:"REDUCE_TOTAL",
      payload:tot
    })
  }
  return (<GlobalContext.Provider value={{
    products: state.products,
    length: state.length,
    selectedImg: state.selectedImg,
    total: state.total,
    addItem,
    updateTotal,
    reduceTotal,
    setLength,
    setProducts,
    setSelectedImg
  }}>
    {children}
  </GlobalContext.Provider>);
}