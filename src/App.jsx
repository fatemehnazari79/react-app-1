
import { useState } from "react";
import Contant from "./components/contant.jsx";
import Header from "./components/header.jsx";

function App() {
  const[activeTab,setActiveTab]=useState("Tab1");
  return (
    <>
    <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
    <Contant activeTab={activeTab}/>
    </>
  )
}
export default App;
