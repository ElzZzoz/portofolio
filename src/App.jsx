import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterLayout from './components/masterLayout/MasterLayout'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import NotFound from './components/notFound/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/work",
        element: <Work />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
], {
  basename: '/portofolio' // Add this line to match your vite.config.js base path
});

function App() {
  return <RouterProvider router={router} />
}

export default App
