import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
interface PageStyle  {

}

const home: React.FC<PageStyle> = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
        <img src={logo} alt="E-coleta"/>
        </header>
        <main>
          <h1>Seu Marketplace de coleta de residuos</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <a href="cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de Coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default home;