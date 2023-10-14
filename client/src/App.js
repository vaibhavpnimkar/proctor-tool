import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import CustomWebcam from './components/CustomWebcam';
import { ImgSrcProvider } from './contexts/ImageContext';

function App() {
  return (
    <BrowserRouter>
      <ImgSrcProvider> 
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<SignIn />} />
        </Routes>
      </ImgSrcProvider>
    </BrowserRouter>
  );
}

export default App;
