
import Home from "./components/home/Home";
import Additem from "./components/additem/Additem";


import Header from "./components/header/Header";
import AdminSetting from "./components/accountsetting/AdminSetting";
import Userhome from "./components/userhome/Userhome";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      
     { <BrowserRouter>
   
     <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/additem" element={<Additem/>}/>
        
          <Route path="/account-setting" element={<AdminSetting/>}/>
        </Routes>
      
      
     </BrowserRouter>}
    
    </div>
  );
}

export default App;
