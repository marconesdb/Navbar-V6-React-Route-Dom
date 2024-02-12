import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Projetos from './Projetos'
import Contato from './Contato'
function App() {
 

  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/projetos' element={<Projetos/>}/>
     <Route path='/contato' element={<Contato/>}/>
     <Route path='*' element={<h1>Not Found</h1>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
