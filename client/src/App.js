import './App.css';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/login' Component={LogIn}/>
   <Route path='/register' Component={SignIn}/>
   </Routes>
   </BrowserRouter>
     
 
  );
}

export default App;
