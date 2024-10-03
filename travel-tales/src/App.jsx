import './App.css';

import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Homepage from './pages/homepage.jsx';
import UserProfile from './pages/UserProfile.jsx';
import DiaryEntry from './pages/DiaryEntry.jsx';
import ViewDiary from './pages/ViewDiary.jsx';


import { Routes, Route } from 'react-router-dom';
import AuthProvider from './AuthProvider.jsx';


function App() {
 

  return (
    <>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/diary" element={<DiaryEntry />} />
            <Route path="/diary-detail/:id" element={<ViewDiary />} />
      </Routes>
      </AuthProvider>
    </>
    )
}

export default App
