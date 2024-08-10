import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { Details, Users, UserReport, UserSummary, NotFoundPage } from './pages/index.ts'
import App from './App.tsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <Navigate to="/users" replace={true} />, // Redirect from root to /users
          errorElement: <NotFoundPage />,
        },
        {
          path: "/users",
          element: <Users />,
          errorElement: <NotFoundPage />
        },
        {
          path: "/users/:userId/details",
          element: <Details />,
          errorElement: <NotFoundPage />,
          children: [
            {
              path: "summary",
              element: <UserSummary />,
              errorElement: <NotFoundPage />,
            },
            {
              path: "report",
              element: <UserReport />,
              errorElement: <NotFoundPage />,
            }
          ]
        }
      ]
    },

  ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


