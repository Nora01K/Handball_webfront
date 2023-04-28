
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import UserHome from './pages/UserHome/UserHome';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="test"  element={<UserHome/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App;
