import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Route from './components/Route'
import Error from './components/Error'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Tech from './components/Tech';
import Angular from './components/Technologies/Angular';
import React1 from './components/Technologies/React1';
import Vue from './components/Technologies/Vue';
import Dashboard from './components/Dashboard';
import House from './components/Services/House';
import Work from './components/Services/Work';
import Travel from './components/Services/Travel';
import './App.css';

function App() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<Route/>,
      errorElement:<Error/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'technologies',
          element:<Tech/>,
          children:[
            {
              path:'',
              element:<React1/>
            },
            {
              path:'react',
              element:<React1/>
            },
            {
              path:'angular',
              element:<Angular/>
            },
            {
              path:'vue',
              element:<Vue/>
            }
          ]
        },
        {
          path:'dashboard/:uname',
          element:<Dashboard/>,
        },
        {
          path:'house',
          element:<House/>
        },
        {
          path:'work',
          element:<Work/>
        },
        {
          path:'travel',
          element:<Travel/>
        }
      ]
    }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
