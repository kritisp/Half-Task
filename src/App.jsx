import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import PhotographyPage from './pages/PhotographyPage'
import DriverPage from './pages/DriverPage'
import CreatorPage from './pages/CreatorPage'
import ClientPage from './pages/ClientPage'
import ClientDashboard from './pages/ClientDashboard'
import DriverProfile from './pages/DriverProfile'
import CreatorDashboard from './pages/CreatorDashboard'
import DriverDashboard from './pages/DriverDashboard'
import PhotographerDashboard from './pages/PhotographerDashboard'

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isAppView = pathname.includes('/dashboard') || pathname.includes('/profile');

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-brand-navy dark:text-white transition-colors duration-300">
      {!isAppView && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/driver" element={<DriverPage />} />
          <Route path="/creator" element={<CreatorPage />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/creator/dashboard" element={<CreatorDashboard />} />
          <Route path="/driver/dashboard" element={<DriverDashboard />} />
          <Route path="/photographer/dashboard" element={<PhotographerDashboard />} />
          <Route path="/driver/profile" element={<DriverProfile />} />
        </Routes>
      </main>
      {!isAppView && <Footer />}
    </div>
  )
}

export default App
