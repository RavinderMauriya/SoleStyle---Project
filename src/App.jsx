import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Women from './Pages/Women'
import Men from './Pages/Men'
import Kids from './Pages/Kids'
import About from './Pages/About'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop">
                        <Route path="men" element={<Men />}></Route>
                        <Route path="women" element={<Women />}></Route>
                        <Route path="kids" element={<Kids />}></Route>
                    </Route>
                    <Route path="/about" element={<About/>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App