import React from 'react';
import { useTranslation } from 'react-i18next';

import CardGrid from '../components/cardGrid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TextSection from '../components/textSection';
import { theme } from '../styles/styles';

const styles = {
  h1: {
    ...theme.typography.h1,
    color: theme.colors.gatsbyPurple,
    margin: '32px 0',
  },
  h1Bold: {
    ...theme.typography.h1,
    fontWeight: 700,
  },
  p: theme.typography.pDefault,
  pSmall: theme.typography.pSmall,
  textContent: {
    color: theme.colors.grayA,
    maxWidth: '960px',
  },
};

const IndexPage: React.FC = () => {
  const { t } = useTranslation();

  const intro = (
    <>
      <h1 style={styles.h1}>
        {t('pleaseUpdate')} <span style={styles.h1Bold}>{t('webBrowser')}</span>
      </h1>
      <p style={styles.p}>{t('pleaseUpdateLongVersion')}</p>
    </>
  );

  const textContent = (
    <div style={styles.textContent}>
      <TextSection
        title={t('notAbleToUpdate')}
        paragraph={t('notAbletoUpdateDescription')}
      />
    </div>
  );

  return (
    <Layout>
      <SEO title={t('title')} />
      {intro}
      <CardGrid />
      {textContent}
    </Layout>
  );
};

export default IndexPage;
