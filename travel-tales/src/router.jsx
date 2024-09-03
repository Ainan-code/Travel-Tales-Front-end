import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Homepage from './pages/homepage.jsx';


const Router = () => {
  const router =   createBrowserRouter([
        {
          path: "/",
          element: <App/>,
          
        },
      
        {
          path: "/homepage",
          element: <Homepage/>,

          },

          {
            path: "/register",
            element: <Register/>,
  
            },

            {
              path: "/login",
              element: <Login/>,
    
              },
             

        
      ]);

      return <RouterProvider router={router}/>

} 

export default Router;