import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import PlayComputer from "./components/PlayComputer";

function App() {
  return (
      <BrowserRouter>
          <Routes>

              <Route exact path="/" element={<Home />} />    
              <Route exact path="/playComputer" element={<PlayComputer />} />  


              
              
          </Routes>
      </BrowserRouter>

  )
}

export default App;
