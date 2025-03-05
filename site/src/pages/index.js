import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
          The autonomation platform for the autonomous internet.
        </p>
        <div className={styles.contentWrapper}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <Heading as="h2" className={styles.stepTitle}>
              Install & Build
            </Heading>
            <p className={styles.stepDescription}>
              Hit the ground running with our CLI and Getting Started guide.
            </p>
            <Link
              to="/docs/getting-started"
              className={clsx('button', styles.primaryButton, styles.stepButton)}
            >
              Get Started
            </Link>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <Heading as="h2" className={styles.stepTitle}>
              Examples & Community
            </Heading>
            <p className={styles.stepDescription}>
              Explore templates and join the conversation on GitHub.
            </p>
            <Link
              to="https://github.com/otonoma/paranet"
              className={styles.outlineButton}
            >
              Visit GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}