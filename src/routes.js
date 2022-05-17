import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Festivals from "./pages/Festivals";
import Community from "./pages/Community";

export default function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/festivals' element={<Festivals />} />
                <Route path='/guide' element={<Guide />} />
                <Route path='/community' element={<Community />} />
            </Routes>
        </BrowserRouter>
    )
}