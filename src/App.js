import React from "react";
import Header from './components/Header.jsx';
import Propuestas from './components/propuestas.js';

import './App.css';
import './css/characters.css';
import './css/images.css';

function App() {

  return (
    <div className='App'>
      <Header />

      <main>
        <div className="divImg">
          <img src="./Milei1-exa/img/LLA.png" alt="La Libertad Avanza Logo" style={{ width: 180 }} />
          <img src="./Milei1-exa/img/LLAtext.png" alt="La Libertad Avanza Texto" style={{ width: 300 }} />
        </div>

        <div>
          <h1 id="Quien_es--Milei" className='ctr'>Javier Gerardo Milei</h1>
          <article className='grd'>
            <div>

            </div>
            <div>
              <p>
                Economista argentino nacido el 22 de noviembre de 1970 en Buenos Aires. Posee una Licenciatura en Economía de la Universidad de Buenos Aires (UBA), un Doctorado en Ciencias Económicas de la Universidad Nacional de La Plata (UNLP) y una Maestría en Economía y Ciencias Políticas de la Escuela Superior de Economía y Administración de Empresas (ESEADE). Destacado por sus posturas liberales, ha participado activamente en debates públicos sobre políticas económicas y sociales en Argentina. Su estilo directo y enérgico en la defensa de sus opiniones le ha ganado tanto seguidores como críticos en el ámbito público y académico.
              </p>
            </div>
          </article>
        </div>

        <h1 id='PropuestasMilei' className='ctr'>Propuestas</h1>
        <article>
          <table className='tablaPropuestas'>
            <tbody>
              <tr>
                <th>Propuesta</th>
                <th>Descripción</th>
              </tr>
              <Propuestas candidato={'Milei'} />
            </tbody>
          </table>

        </article>
      </main>
    </div>
  );
}

export default App;
