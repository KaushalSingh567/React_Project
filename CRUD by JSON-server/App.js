import './App.css';
import Navbar from './page/Navbar';
import Home from './page/Home';
import Register from './page/Register';
import Listing from './page/Listing';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import EditUser from './page/EditUser';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<><Navbar/><Home/></>}/>
        <Route path="/register" element={<><Navbar/><Register /></>} />
        <Route path="/listing" element={<><Navbar/> <Listing/> </>} />
        <Route path="/edituser/:id" element={<><Navbar/> <EditUser/> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;












