import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './Components/AddPost';
import UserLogin from './Components/UserLogin';
import UserReg from './Components/UserReg';
import ViewMyPost from './Components/ViewMyPost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<UserLogin/>} />
      <Route path='/reg' exact element={<UserReg/>} />
      <Route path='/addp' exact element={<AddPost/>} />
      <Route path='/viewmp' exact element={<ViewMyPost/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
