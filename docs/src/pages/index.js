import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <div className={styles.buttons}>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary password for protection
    const correctPassword = "arpanet";
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password, please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout title="Password Protected" description="Enter password to access the site">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <form onSubmit={handleSubmit}>
            <h2>Password Protected Site</h2>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
            />
            <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>
              Submit
            </button>
          </form>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
