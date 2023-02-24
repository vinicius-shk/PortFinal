import { useNavigate } from 'react-router-dom';
import * as H from './styles';

export default function NavBar() {
  const navigate = useNavigate()
  return(
    <H.NavBar>
      <H.DevName>
        Vinícius Shkromada de Oliveira
      </H.DevName>
      <H.NavLinks
        onClick={ () => navigate('/') }
        autoFocus={ true }
      >
        About
      </H.NavLinks>
      <H.NavLinks
        onClick={ () => navigate('/technologies') }
      >
        Technologies
      </H.NavLinks>
      <H.NavLinks
        onClick={ () => navigate('/projects') }
      >
        Projects
      </H.NavLinks>
      <H.NavLinks
        onClick={ () => navigate('/contact') }
      >
        Contact
      </H.NavLinks>
    </H.NavBar>
  )
}