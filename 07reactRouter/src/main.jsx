import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements} from  'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import Github, { githubinfoloader } from './components/Github/github.jsx'

// const router = createBrowserRouter([   // First method
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {path:"",
//         element:<Home/>
//       },
//       {path:"about",
//         element:<About/>
//       },
//       {path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>} />      
      {/*second method} */}
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='User/:userid' element={<User/>} />
      <Route
      loader={githubinfoloader}
       path='github' 
       element={<Github/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
