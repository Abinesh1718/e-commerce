import React, { useState } from 'react'
import { Provider, useSelector } from 'react-redux'
import store from './store/store'
import ProductComponant from './product'
import Cart from './cart'

function RoutLayout() {



  return (
    <Provider store={store}>

      <div>
        <ProductComponant />
        {/* <Cart /> */}
      </div>
    </Provider>
  )
}

export default RoutLayout