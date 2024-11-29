import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router";
import FooComponent from "./components/Foo";
import BarComponent from "./components/Bar";
import HomeComponent from "./components/Home";

function App() {
  return (
      <div className="app">
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/foo" element={<FooComponent/>}/>
            <Route path="/bar" element={<BarComponent/>}/>
          </Routes>
        </HashRouter>
      </div>
  );
}

export default App;
