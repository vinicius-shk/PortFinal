import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Technologies from '../pages/technologies';

export default function Main() {
  return(
    <Routes>
      <Route exact path='/' element={ <Home /> } />
      <Route path='/technologies' element={ <Technologies /> } />
    </Routes>
  )
}