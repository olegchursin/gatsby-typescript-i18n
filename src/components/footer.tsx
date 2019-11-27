import React from 'react'
import { useTranslation } from 'react-i18next'

import { theme } from '../styles/styles'
import { IStyleMap } from '../types/IStyleMap'
import LanguageSwitch from './languageSwitch'

const styles: IStyleMap = {
  footerText: theme.typography.pXSmall,
  footerWrapper: {
    alignItems: 'center',
    background: theme.colors.gatsbyPurple,
    color: theme.colors.white,
    display: 'flex',
    flexDirection: 'column',
    height: '120px',
    justifyContent: 'center',
    marginTop: '12px',
    padding: '48px 0 32px',
  },
}

const Footer = () => {
  const { t, ready } = useTranslation()

  return (
    <footer style={styles.footerWrapper}>
      <p style={styles.footerText}>
        © {new Date().getFullYear()} {t('copyright')}
      </p>
      {ready ? <LanguageSwitch /> : <div>Loading...</div>}
    </footer>
  )
}

export default Footer
