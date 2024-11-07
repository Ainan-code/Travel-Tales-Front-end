import { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated]= useState(false);

  

  const loginAction = async (loginpayload) => {
    try {
      const response = await axios.post('http://localhost:5000/users/login', loginpayload);
      console.log('Form data submitted successfully:', response.data);
      // You can add additional logic here, such as displaying a success message
        setUser(response.data.id);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        navigate("/profile");
        return;
      }
      
    catch (err) {
      console.error(err);
    }
  };
   




  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };


  return <AuthContext.Provider value={{ token, user, loginAction, logOut, isAuthenticated, setToken }}>{children}</AuthContext.Provider>
};



 const UseAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;