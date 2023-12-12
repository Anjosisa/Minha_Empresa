import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Painel from './pages/Painel'
import { BrowserRouter, Routes, Route } from "react-router-dom"


// Função que retorna um elemento jsx

function App() {

  const auh = localStorage.getItem("key") === 'token' || false

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Login />} />
          {auh ? <Route path='/painel' element={<Painel />} /> : ""}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App