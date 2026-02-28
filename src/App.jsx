import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Women from './Pages/Women'
import Men from './Pages/Men'
import Kids from './Pages/Kids'
import About from './Pages/About'
import Footer from './Components/Footer'
import { DataProvider } from './Context/productDataContext'
import FormModel from './Components/FormModel'

const App = () => {
    //Form Model
    const [formOpen, setFormOpen] = useState(false);

    return (
        <div>
            <DataProvider>
                <BrowserRouter>
                    <Navbar setFormOpen={setFormOpen} />
                    <Routes>
                        <Route path="/" element={<Home setFormClose={setFormOpen} formClose={formOpen} />}></Route>
                        <Route path="/shop">
                            <Route path="men" element={<Men />}></Route>
                            <Route path="women" element={<Women />}></Route>
                            <Route path="kids" element={<Kids />}></Route>
                        </Route>
                        <Route path="/about" element={<About />}></Route>
                    </Routes>
                    <Footer />

                    {formOpen && <FormModel onClose={() => setFormOpen(false)} />}

                </BrowserRouter>
            </DataProvider>
        </div>
    )
}

export default App