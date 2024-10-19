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
    <div className={clsx('introduction', styles.intro)}>
      <p>
      Welcome to my portfolio! I'm an expert technical writer with 5+ years of experience in government, SaaS, and cybersecurity. I have produced a variety of technical documentation, including:</p>
      <ul>
        <li>Product documentation</li>
        <li>API documentation</li>
        <li>SDK documentation</li>
        <li>Proposals</li>
      </ul>
      <p>In addition to documentation, I have a proven track record in joining organizations as the first or lone tech writer and building out technical writing teams from the ground up. Some examples of technical writing practices I've established are:</p>
      <ul>
        <li>Integrating technical writing into the product lifecycle</li>
        <li>Standardizing the types of content that belong in documentation</li>
        <li>Leveraging knowledge base analytics for data-driven documentation maintenance</li>
        <li>Migrating an organization to a docs-as-code workflow</li>
        <li>Publishing and maintaining an organization's first technical writing style guide</li>
      </ul>
      <p>If you'd like to connect, feel free to email me at <a href="mailto:abscho@gmail.com">abscho@gmail.com</a> or send me a message on <a href="https://www.linkedin.com/in/abscho/">LinkedIn.</a></p>
      <p>I am currently located in <b>Germantown, MD, USA.</b></p>
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
        <div className={clsx('intro', styles.intro)}><Intro /></div>
        <div className={clsx('intro', styles.propic)}><Headshot /></div>
      </div>  
    </Layout>
  );
}
