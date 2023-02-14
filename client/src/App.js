import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/adduser" element = {<AddUser />} />
      <Route path="/allusers" element = {<AllUsers />} />
      <Route path='/edituser/:id' element = {<EditUser />} />
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
