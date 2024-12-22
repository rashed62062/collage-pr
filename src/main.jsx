import { StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async';

import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';
import Statistics from './components/Statistics/Statistics';
import News from './components/News/News';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'news',
        element: <News></News>,
        loader: () => fetch('/news.json')
      },
      {
        path: 'gadgets/:gadgetId',
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgets.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    <Toaster />
    </HelmetProvider>
  </StrictMode>
)
