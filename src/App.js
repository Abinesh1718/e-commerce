import logo from './logo.svg';
import './App.css';
import ProductComponant from './product';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './dashboard';
import Cart from './cart';
import RoutLayout from './RoutLayout';
import UserList from './classComponant';
const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<RoutLayout />} >
      <Route path='/cart' element={<Cart />}>
      </Route>
      <Route path='/product' element={<ProductComponant />}>
      </Route>
    </Route>

  </Route>
))



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <UserList/> */}
    </div>
  )
}

export default App;
