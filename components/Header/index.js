import React from 'react'
import Link from 'next/link';

import styles from './styles.module.css'

function Header() {
  return (
	<header className={styles.header}>
    <Link className={styles.logo} href="/"><span>BLOG</span></Link>

    <nav>
      <Link target="_blank" href="https://github.com/enespolat25/">Hakkımızda</Link>
    </nav>
  
  
  
  
  </header>
  )
}

export default Header