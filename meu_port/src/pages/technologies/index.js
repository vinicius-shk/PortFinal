import { SiJavascript, SiTypescript, SiMysql, SiMongodb, SiExpress, SiSequelize, SiJest, SiMocha, SiChai } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';

import * as T from './styles';
import { useState } from 'react';

export default function Technologies() {
  const [details, setDetails] = useState('Clique no ícone para info');
  const inconList = [
    FaHtml5, FaCss3, SiJavascript, SiTypescript, FaReact, FaNodeJs, SiMysql, SiMongodb, SiExpress, SiSequelize, SiJest, SiMocha, SiChai
  ];
  return (
    <T.Container>
      <T.Circle details={ details }>
        { inconList.map((Icon, index) => (
          <T.Icon rot={ 27 * index }>
            <Icon />
          </T.Icon>
        )) }
      </T.Circle>
    </T.Container>
  )
}