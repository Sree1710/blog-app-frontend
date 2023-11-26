import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './Components/AddPost';
import UserLogin from './Components/UserLogin';
import UserReg from './Components/UserReg';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<UserLogin/>} />
      <Route path='/addp' exact element={<AddPost/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
