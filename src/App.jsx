import { useState } from 'react'
import { Navbar } from "./Component/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './AppStore/Store.jsx';
import CityContext from './ContextApi/CityContextApi.jsx';

function App() {
  const [latitude,setLatitude] =useState(19.07480)
const [longitude,setLongitude] =useState(72.88560)
  return (
    <>
    <Provider store={appStore} >
    <CityContext.Provider value={{latitude:latitude,longitude:longitude,setLatitude,setLongitude}}> 
    <Navbar />
    <Outlet/>
    </CityContext.Provider>
    </Provider>
     
    </>
  );
}

export default App
