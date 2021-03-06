import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage, Derivative, Integral, Determinant, Inverse } from "./pages";
import { Sidebar, Header } from "./components";
import "./App.css"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
  
  const [headerTitle, setHeaderTitle] = React.useState("")
  const handleHeaderTitle = (title) => setHeaderTitle(title)
  
  return (
    <BrowserRouter>
      <div id="app">
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebarCallback={() => setIsSidebarOpen(false)}/>
        <div id="content">
          <Header isSidebarOpen={isSidebarOpen} openSidebarCallback={() => setIsSidebarOpen(true)} title={headerTitle}/>
          <Routes>
            <Route exact path="/" element={<LandingPage headerTitleCallback={handleHeaderTitle}/>} />
            <Route path="/calculus/derivative" element={<Derivative headerTitleCallback={handleHeaderTitle}/>} />
            <Route path="/calculus/integral" element={<Integral headerTitleCallback={handleHeaderTitle}/>} />
            <Route path="/linalg/determinant" element={<Determinant headerTitleCallback={handleHeaderTitle}/>} />
            <Route path="/linalg/inverse" element={<Inverse headerTitleCallback={handleHeaderTitle}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;