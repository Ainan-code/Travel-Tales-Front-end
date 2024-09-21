import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Homepage from './pages/homepage.jsx';
import UserProfile from './pages/UserProfile.jsx';
import DiaryEntry from './pages/DiaryEntry.jsx';


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

              {
                path: "/profile",
                element: <UserProfile/>
      
                },

                {
                  path: "/creatediary",
                  element: <DiaryEntry/>
        
                  },


               
             

        
      ]);

      return <RouterProvider router={router}/>

} 

export default Router;