import './App.css';
import { UserContextProvider } from './contexts/userContext';
import toast, { Toaster } from 'react-hot-toast';
import SignUp from './pages/SignUp/SignUp';  
import Home from './pages/Home/Home';  
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <UserContextProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
