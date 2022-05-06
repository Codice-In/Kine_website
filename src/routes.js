import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Festivals from "./pages/Festivals";
import Community from "./pages/Community";

export default function RouteApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/festivals' element={<Festivals />} />
                <Route path='/guide' element={<Guide />} />
                <Route path='/community' element={<Community />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}