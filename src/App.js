import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './Components/AddPost';
import UserLogin from './Components/UserLogin';
import UserReg from './Components/UserReg';
import ViewMyPost from './Components/ViewMyPost';
import ViewAllPost from './Components/ViewAllPost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<UserLogin/>} />
      <Route path='/reg' exact element={<UserReg/>} />
      <Route path='/addp' exact element={<AddPost/>} />
      <Route path='/viewmp' exact element={<ViewMyPost/>} />
      <Route path='/viewap' exact element={<ViewAllPost/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
