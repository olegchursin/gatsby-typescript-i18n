import React from 'react'

import { theme } from '../styles/styles'

const styles = {
  h3: {
    ...theme.typography.h3,
    margin: '32px 0 18px',
  },
  p: theme.typography.pDefault,
}

interface ITextSectionProps {
  readonly title: string
  readonly paragraph: string
}

const TextSection: React.FC<ITextSectionProps> = ({
  title,
  paragraph,
  children,
}) => {
  return (
    <>
      <h3 style={styles.h3}>{title}</h3>
      <p style={styles.p}>{paragraph}</p>
      {children ? children : null}
    </>
  )
}

export default TextSection
