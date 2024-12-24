import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Books from "./pages/Books"
import AboutAuthor from "./pages/AboutAuthor"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import SingleBook from "./pages/SingleBook"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
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
          path: '/books/:bookName',
          element: <SingleBook />
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
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/payment/checkout',
          element: <Checkout />
        }
      ]
      
    }
  ])
  
  return <RouterProvider router={router} />
}

export default App
