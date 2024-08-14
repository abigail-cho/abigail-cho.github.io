import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function Headshot() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <img className={clsx('profile picture', styles.propic)} src={siteConfig.themeConfig.image} />
    </div>
  )
}

function Intro() { 
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <p className={clsx('introduction', styles.intro)}>
        Welcome to my portfolio! I've been a technical writer for 5 years
      </p>
    </div>
  )
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Abigail Cho's technical writing portfolio">
      <HomepageHeader />
      <div className={clsx('intro box', styles.introBox)}>
        <Intro />
        <Headshot />
      </div>  
    </Layout>
  );
}
