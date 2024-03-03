import React from 'react';
import {RouterProvider} from 'react-router-dom';
import routerConfig from './router';
import './APP.css';
function App() {
  return <div>
    <RouterProvider router={routerConfig}></RouterProvider>
  </div>
}

export default App;
