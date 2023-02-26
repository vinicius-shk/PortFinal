import { SiJavascript, SiTypescript, SiMysql, SiMongodb, SiExpress, SiSequelize, SiJest, SiMocha, SiChai } from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';

import * as T from './styles';
import { useState } from 'react';

export default function Technologies() {
  const [details, setDetails] = useState('Click an icon');
  const inconList = [
    FaHtml5, FaCss3, SiJavascript, SiTypescript, FaReact, FaNodeJs, SiMysql, SiMongodb, SiExpress, SiSequelize, SiJest, SiMocha, SiChai
  ];
  const iconDesc = [
    'HTML5',
    'CSS3',
    'Javascript',
    'TypeScript',
    'React.js',
    'Node.js',
    'MySQL',
    'MongoDB',
    'Express.js',
    'Sequelize',
    'Jest',
    'Mocha',
    'Chai',
  ];

  return (
    <T.Container>
      <T.Circle iconDesc={ details }>
        { inconList.map((Icon, index) => (
          <T.Icon
          rot={ 27 * index }
          onClick={ () => setDetails(iconDesc[index])}
          key={ index }
          >
            <Icon />
          </T.Icon>
        )) }
        <T.Desc>{ details }</T.Desc>
      </T.Circle>
    </T.Container>
  )
}