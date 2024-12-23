import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Books from "./pages/Books"
import AboutAuthor from "./pages/AboutAuthor"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
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
        {
          path: '/blogs',
          element: <Blog />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]
      
    }
  ])
  
  return <RouterProvider router={router} />
}

export default App
