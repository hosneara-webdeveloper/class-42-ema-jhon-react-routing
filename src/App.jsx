/* eslint-disable no-unused-vars */

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Shop from './Components/Body/Shop'
import Main from './LayOut/Main';
import Order from './Components/Body/Orders/Order';
import Inventory from './Components/Body/Inventory/Inventory';
import About from './Components/Body/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
          return fetch('Product.json')},
          element: <Shop></Shop>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/inventory',

          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    }
  ]);

  return (
    <>
      <div>
        <RouterProvider
          router={router}

        ></RouterProvider>
      </div>
    </>
  )
}

export default App
