import React, { useState, useEffect } from 'react'
import stlHead from './header.module.css';
import { AiFillCaretDown } from 'react-icons/ai';

function Header() {
  const [extenderHeader, setExtenderHeader] = useState(true);

  useEffect(() => {

  }, [extenderHeader])


  return (
    <header className={`${stlHead.header} ${extenderHeader ? stlHead.btnExtend : stlHead.btnNoExtend}`}>
      <div className={stlHead.allheader} >
        <img className={stlHead.MyV} src='/img/header/mileivillaruel.png' alt='milei y villaruel' />

        <ul>
          <li>
            <a href='#Quien_es--Milei'>Milei, Quien es</a>
          </li>
          <li>
            <a href='#PropuestasMilei'>Propuestas</a>
          </li>
          <li>
            <a href='#Quien_es--Villaruel'>Villaruel, Quien es</a>
          </li>
          <li>
            <a href='#PropuestasVillaruel'>Propuestas</a>
          </li>
          <li>
            <a href='#NoDigimos'>NO digimos</a>
          </li>
        </ul>
      </div>

      <button onClick={() => setExtenderHeader(!extenderHeader)}>
        <AiFillCaretDown />
      </button>
    </header>
  )
}

export default Header