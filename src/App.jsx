import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index.jsx'
import ContactPage from './pages/contact'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
