import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';

export default function Main() {
  return(
    <Routes>
      <Route exact path='/' element={ <Home /> } />
    </Routes>
  )
}