import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
        Welcome to the Paranet
        </Heading>
        <p className={styles.heroSubtitle}>
        The Automation Platform for the Autonomous Internet. Install our dev kit and build the future of automation.
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.ctaButton)}
            to="/docs/getting_started"
          >
            Get Started
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.secondaryButton)}
            to="https://github.com/otonoma/paranet"
          >
            GitHub Community
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title="The Paranet"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}