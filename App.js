 
 import React from "react"
import MainRoutes from "./Routes/MainRoutes";


import Home from "./pages/Home"
import Login from './pages/Login'
import Signup  from "./pages/Signup";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
     

         <MainRoutes/>

    
      {/* <Home/> */}
      {/* <Signup/> */}
       {/* <Login/> */}
    </div>
  );
}

export default App;
