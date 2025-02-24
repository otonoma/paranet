import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

const clientId = 'YOUR_GITHUB_CLIENT_ID'; // Replace with your GitHub OAuth Client ID
const redirectUri = 'https://docs.paranet.ai/auth/github/callback'; // Adjust for your domain

export default function HomepageFeatures() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [githubUsername, setGithubUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('github_username');
    if (storedUsername) {
      setGithubUsername(storedUsername);
    }
  }, []);

  const handleGitHubLogin = () => {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user:read`;
    window.location.href = authUrl;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      // Mock backend call (replace with real endpoint)
      fetch(`https://your-backend.com/auth/github?code=${code}`, {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((data) => {
          const username = data.username;
          setGithubUsername(username);
          localStorage.setItem('github_username', username);
          window.history.replaceState({}, document.title, '/');
        })
        .catch((err) => console.error('GitHub auth failed:', err));
    }
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
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
              to="/docs/getting_started"
              className={clsx('button button--primary', styles.stepButton)}
            >
              Start Now
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
              className={clsx('button button--outline', styles.stepButton)}
            >
              Visit GitHub
            </Link>
          </div>
        </div>
        {/* <div className={styles.githubCta}>
          {githubUsername ? (
            <p className={styles.connectedText}>
              Connected as <span className={styles.username}>@{githubUsername}</span>
            </p>
          ) : (
            <button
              className={styles.githubButton}
              onClick={() => setIsModalOpen(true)}
            >
              <span className={styles.githubIcon}>GitHub</span> Connect
            </button>
          )}
        </div> */}

        {/* {isModalOpen && !githubUsername && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <Heading as="h3" className={styles.modalTitle}>
                Join via GitHub
              </Heading>
              <p className={styles.modalDescription}>
                Connect with GitHub to stay in the loop and access exclusive alpha perks.
              </p>
              <button className={styles.githubModalButton} onClick={handleGitHubLogin}>
                Sign in with GitHub
              </button>
              <button
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
              >
                Skip for Now
              </button>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
}