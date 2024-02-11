
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar";
import Products from "./pages/Products";
import Hotel from "./pages/Hotel";
import Flight from "./pages/Flights";
import TripFinder from "./pages/TripFinder";
import Inspiration from "./pages/Inspiration";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Products/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/flight" element={<Flight/>}/>
        <Route path="/trip" element={<TripFinder/>}/>
        <Route path="/inspiration" element={<Inspiration/>}/>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  )
}

export default App