import React, {  } from 'react';
import {createBrowserRouter} from'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ManageLayout from '../layouts/ManageLayout';
import QuestionLayout from '../layouts/QuestionLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import List from '../pages/manage/List';
import Star from '../pages/manage/Star';
import Trash from '../pages/manage/Trash';
import Edit from '../pages/question/Edit';
import Stat from '../pages/question/Stat';
import { AuthRoute } from './AuthRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element:( 
            <Home />
        ),
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element:( 
          <AuthRoute>
            <ManageLayout />
          </AuthRoute>
        ),
        children: [
          {
            path: 'list',
            element:( 
          <AuthRoute>
            <List />
          </AuthRoute>
        ),
          },
          {
            path: 'star',
             element:( 
          <AuthRoute>
            <Star />
          </AuthRoute>
        ),
          },
          {
            path: 'trash',
            element:( 
          <AuthRoute>
            <Trash />
          </AuthRoute>
            )
          },
        ],
      },
      {
        path: '*', // 404 路由配置，都写在最后（兜底）
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id', 
        element: <Stat />,
      },
    ],
  },
])
export default router;