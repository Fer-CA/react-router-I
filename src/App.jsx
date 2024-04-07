import Menu from './components/Menu'
import { Contacto, Home, NotFound } from './layouts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  

  return (
    <>
    <BrowserRouter>
     <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
