import { useState } from 'react'
import { Navbar } from "./Component/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import appStore from './AppStore/Store.jsx';
function App() {
  return (
    <>
    <Provider store={appStore} >
    <Navbar />
    <Outlet/>
    </Provider>
     
    </>
  );
}

export default App
