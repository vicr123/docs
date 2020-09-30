import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
      <section className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <div className={styles.banner}>
                Welcome to the Victor Tran documentation!
            </div>
        </div>
      </section>
        <section className={styles.firstSection}>
            <div className="container">
                <h3>Select a project</h3>
                <p>Documentation is available for these projects now.</p>
                <div className={styles.projectLinks}>
                    <Link
                      className={clsx(
                        'button button--outline button--secondary button--lg',
                        styles.getStarted,
                      )}
                      to={useBaseUrl('docs/thebeat/install')}>
                      theBeat
                    </Link>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
