import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainPage from './components/MainPage.jsx'
import Application from './components/Application.jsx'
import Contact from './components/Contact.jsx'
import CompanyProfile from './components/CompanyProfile.jsx'
import Goals from './components/Goals.jsx'
import Certificates from './components/Certificates.jsx'
import SheetsPlates from './components/SheetsPlates.jsx'
import PipesTubes from './components/PipesTubes.jsx'
import IndValves from './components/IndValves.jsx'
import IndFlanges from './components/IndFlanges.jsx'
import SsFasteners from './components/SsFasteners.jsx'
import DairyValves from './components/DairyValves.jsx'
import AngleChannel from './components/AngleChannel.jsx'
import BarsRods from './components/BarsRods.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <MainPage />
      },
      {
        path : '/application',
        element : <Application />
      },
      {
        path:'/contact',
        element : <Contact />
      },
      {
        path : '/company-profile',
        element : <CompanyProfile />
      },
      {
        path:'/our-goals',
        element : <Goals />
      },
      {
        path:'/certificates',
        element : <Certificates />
      },
      {
        path:'/sheet-plates-coils',
        element : <SheetsPlates />
      }
      ,
      {
        path:'/pipes-tubes',
        element : <PipesTubes/>
      }
      ,
      {
        path:'/ind-valves',
        element : <IndValves/>
      }
      ,
      {
        path:'/ind-flanges',
        element : <IndFlanges />
      }
      ,
      {
        path:'/ss-fasteners',
        element : <SsFasteners />
      }
      ,
      {
        path:'/dairy-valves',
        element : <DairyValves />
      }
      ,
      {
        path:'/angle-channel-flats',
        element : <AngleChannel />
      }
      ,
      {
        path:'/bar-rods',
        element : <BarsRods />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
