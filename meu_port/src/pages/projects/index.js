import ProjCard from '../../components/projCard';
import * as P from './styles';
import onlineStore from '../../images/FrontEnd-Online-Store.png';
import solarSystem from '../../images/Project-Solar-System.png';
import carShop from '../../images/Project-Car-Shop.png';
import trybeSmith from '../../images/Project-TrybeSmith.png';
import { useState } from 'react';


export default function Projects() {
  const [focus, setFocus] = useState(null);
  return (
    <P.Container>
      <P.Project
        onClick={ () => setFocus('Online Store') }
      >
        Front End Online Store  
      </P.Project>
      <P.Project
        onClick={ () => setFocus('Solar System') }
      >
        Solar System
      </P.Project>
      <P.Project
        onClick={ () => setFocus('Car Shop') }
      >
        Car Shop
      </P.Project>
      <P.Project
        onClick={ () => setFocus('Smith') }
      >
        Trybe Smith
      </P.Project>
      <P.ImgCont isFocused={focus === 'Online Store'}>
        { ProjCard(onlineStore) }
        <P.Navigator href='https://vinicius-shk-front-end-online-store.vercel.app/'>Acessar Deploy</P.Navigator>
      </P.ImgCont>
      <P.ImgCont isFocused={focus === 'Solar System'}>
        { ProjCard(solarSystem) }
        <P.Navigator href='https://vinicius-shk-project-solar-system.vercel.app/'>Acessar Deploy</P.Navigator>
      </P.ImgCont>
      <P.ImgCont isFocused={focus === 'Car Shop'}>
        { ProjCard(carShop) }
        <P.Navigator href='https://documenter.getpostman.com/view/25780292/2s935snMZ1'>Acessar Documentação</P.Navigator>
      </P.ImgCont>
      <P.ImgCont isFocused={focus === 'Smith'}>
        { ProjCard(trybeSmith) }
        <P.Navigator href='https://documenter.getpostman.com/view/25780292/2s935uFztt'>Acessar Documentação</P.Navigator>
      </P.ImgCont>
    </P.Container>
  )
}