import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import ErrorPage from "./routes/error-page"
import HomePage from './components/HomePage'
import Dashboard from './components/Dashboard/dashboard'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "dashboard",
//         element: <Dashboard />
//       }
//     ]
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
