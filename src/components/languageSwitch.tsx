import React from 'react';
import { useTranslation } from 'react-i18next';

import { theme } from '../styles/styles';
import { IStyleMap } from '../types/IStyleMap';

const styles: IStyleMap = {
  langSwitch: {
    cursor: 'pointer',
    margin: '0 8px',
  },
  textSection: {
    ...theme.typography.pXSmall,
    display: 'flex',
  },
};

const langSwitches = {
  en: {
    title: 'English',
    slug: 'en',
  },
  de: {
    title: 'Deutsch',
    slug: 'de',
  },
};

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const handleSelectLanguage = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const lang: string = target.id;

    i18n.changeLanguage(lang);
  };

  const langSwitch = Object.values(langSwitches).map(langSwitch => {
    return (
      <div
        key={langSwitch.slug}
        style={styles.langSwitch}
        id={langSwitch.slug}
        onClick={handleSelectLanguage}
      >
        {langSwitch.title}
      </div>
    );
  });

  return <div style={styles.textSection}>{langSwitch}</div>;
};

export default LanguageSwitch;
