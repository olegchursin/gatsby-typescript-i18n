import React from 'react'
import { useTranslation } from 'react-i18next'

import SvgChromeLogo from '../svg/ChromeLogo'
import SvgFirefoxLogo from '../svg/FirefoxLogo'
import Card from './card'
import { IStyleMap } from '../types/IStyleMap'

const getCards = t => {
  return [
    {
      img: <SvgChromeLogo width={'50px'} />,
      title: t('chrome'),
      cardLink: 'https://www.google.com/chrome/',
    },
    {
      img: <SvgFirefoxLogo width={'50px'} />,
      title: t('firefox'),
      cardLink: 'https://www.mozilla.org/firefox/new/',
    },
  ]
}

const styles: IStyleMap = {
  cards: {
    display: 'flex',
    margin: '32px 0',
  },
}
const CardGrid: React.FC = () => {
  const { t } = useTranslation()
  const cards = getCards(t)

  const cardSection = (
    <div style={styles.cards}>
      {cards.map(card => {
        return (
          <Card
            key={card.title}
            img={card.img}
            title={card.title}
            cardLink={card.cardLink}
          />
        )
      })}
    </div>
  )

  return cardSection
}

export default CardGrid
