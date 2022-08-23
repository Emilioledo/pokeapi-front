import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemon/:id' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
