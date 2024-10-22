import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Learning_path from './components/learning_path/Learning_path.jsx'
import Ai_assistant from './components/ai_assistant/Ai_assistant.jsx'
import Leaderboard from './components/leaderboard/Leaderboard.jsx'
import Playground from './components/playground/Playground.jsx'
import Modules from './components/modules/Modules.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        // path:"",
        // element: <Home/>
      },
      {
        path:"", 
        element: <Dashboard/>
      },
      {
        path:"learning-path", 
        element: <Learning_path/>
      },
      {
        path:"modules", 
        element: <Modules/>
      },
      {
        path:"playground", 
        element: <Playground/>
      },
      {
        path:"leaderboard", 
        element: <Leaderboard/>
      },
      {
        path:"ai-assistant", 
        element: <Ai_assistant/>
      },
      
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
