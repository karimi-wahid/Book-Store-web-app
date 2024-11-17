import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Books from "./pages/Books"
import AboutAuthor from "./pages/AboutAuthor"
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/books',
          element: <Books />
        },
        {
          path: '/author',
          element: <AboutAuthor />
        },
      ]
      
    }
  ])
  
  return <RouterProvider router={router} />
}

export default App
