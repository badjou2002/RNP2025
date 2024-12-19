import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/landing-page/LandingPage';
import NotFound from './components/notFound/NotFound';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
