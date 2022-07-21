import React from 'react';
import Logo from './Logo';
import TransparentHeaderStyles from '../styles/TransparentHeader.module.css'

function TransparentHeader() {
  return (
    <header className={TransparentHeaderStyles.header}>
        <Logo/>
    </header>
  )
}

export default TransparentHeader