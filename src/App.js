import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<News  pageSize={6} country="in" category="general"/>}></Route>
        <Route path="/Technology" element={<News pageSize={6} country="in" category="technology"/>}></Route>
        <Route path="/Business" element={<News pageSize={6} country="in" category="business"/>}></Route>
        <Route path="/Entertainment" element={<News pageSize={6} country="in" category="entertainment"/>}></Route>
        <Route path="/Health" element={<News pageSize={6} country="in" category="health"/>}></Route>
        <Route path="/Science" element={<News pageSize={6} country="in" category="science"/>}></Route>
        <Route path="/Sports" element={<News pageSize={6} country="in" category="sports"/>}></Route>
      </Routes>
    </BrowserRouter>
      </div>
    )
  }
}

export default App
