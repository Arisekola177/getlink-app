
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./Pages/Home";
import Timeline from "./Components/Timeline";
import Introduction from "./Components/Introduction";
import FAQ from "./Components/FAQ";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";



function App() {
  return (
     <BrowserRouter>
    <div className="bg-secColor overflow-hidden">
         <Navbar />
         <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/timeline" element={ <Timeline />} />
            <Route path="/overview" element={<Introduction />} />
            <Route path="/FAQ" element={ <FAQ />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/register" element={ <Register />} />
         </Routes>
      
         <Footer />
        
    </div>
    </BrowserRouter>
  );
}

export default App;
