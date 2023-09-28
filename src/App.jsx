import { useState } from 'react'
import Home from './routes/Home'
import ChatBot from './routes/ChatBot'
import ErrorPage from './routes/ErrorPage'
import Summary from './routes/Summary'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "register",
      element: <ChatBot />,
    },
    {
      path: "summary",
      element: <Summary />,
    },
  ])

  return <RouterProvider router={router} />
}

/*

*/

export default App
