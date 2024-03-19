import React from 'react';
import {RouterProvider} from 'react-router-dom';
import routerConfig from './router';
import './APP.css';
import ThemeContext from './store/ThemeContext';
import store from './store'; 
function App() {
  return <div>
  <ThemeContext.Provider value={{
        store
    }}>
    <RouterProvider router={routerConfig}></RouterProvider>
  </ThemeContext.Provider>
  </div>
}

export default App;
