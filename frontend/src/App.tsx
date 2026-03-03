import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CampaignsPage from './pages/CampaignsPage';
import CampaignDetailsPage from './pages/CampaignDetailsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'


function App() {
  
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/campaigns' element={<CampaignsPage/>}/>
        <Route path='/campaign/:id' element={<CampaignDetailsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/create' element={<CreateCampaignPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
