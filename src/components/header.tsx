import { Link } from 'gatsby'
import React from 'react'

import { theme } from '../styles/styles'
import { IStyleMap } from '../types/IStyleMap'

const styles: IStyleMap = {
  container: theme.container,
  logo: {
    background: theme.colors.gatsbyPurple,
    borderRadius: '50%',
    height: '40px',
    width: '40px',
  },
  wrapper: {
    background: theme.colors.white,
    boxShadow: theme.shadow,
    marginBottom: '1.45rem',
  },
}

const Header = () => (
  <header style={styles.wrapper}>
    <div style={styles.container}>
      <Link to="/">
        <div style={styles.logo}></div>
      </Link>
    </div>
  </header>
)

export default Header
