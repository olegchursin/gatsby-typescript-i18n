import React, { ReactNode } from 'react'

import { theme } from '../styles/styles'
import { IStyleMap } from '../types/IStyleMap'

const styles: IStyleMap = {
  img: {
    marginRight: '20px',
  },
  p: { ...theme.typography.pDefault, marginBottom: '0px' },
  wrapper: {
    alignItems: 'center',
    borderRadius: '5px',
    boxShadow: theme.shadow,
    display: 'flex',
    margin: '10px 20px 0 0',
    minWidth: '200px',
    padding: '18px 24px',
  },
}

interface ICardProps {
  readonly img: HTMLImageElement | ReactNode
  readonly title: string
  readonly cardLink?: string
}

const Card: React.FC<ICardProps> = ({ img, title, cardLink }) => {
  const linkTitle = (
    <a style={styles.p} href={cardLink}>
      {title}
    </a>
  )
  const textTitle = <p>{title}</p>

  return (
    <div style={styles.wrapper}>
      <div style={styles.img}>{img}</div>
      {cardLink ? linkTitle : textTitle}
    </div>
  )
}

export default Card
