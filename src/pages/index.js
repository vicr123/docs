import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, { translate } from "@docusaurus/Translate";

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Get help with theDesk, theBeat and more.">
      <main>
      <section className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <div className={styles.banner}>
                <Translate
                    id="homepage.splash.welcome"
                    description="Welcome text on the home page">
                    Welcome to the Victor Tran documentation!
                </Translate>
            </div>
        </div>
      </section>
        <section className={styles.firstSection}>
            <div className="container">
                <h3>
                    <Translate
                        id="homepage.first.select-project"
                        description="Select Project text on the homepage">
                        Select a project
                    </Translate>
                </h3>
                <p>
                    <Translate
                        id="homepage.first.documentation-available"
                        description="Documentation is available... text on the homepage">
                        Documentation is available for these projects now.
                    </Translate>
                </p>
                <div className={styles.projectLinks}>
                    <Link
                      className={clsx(
                        'button button--outline button--secondary button--lg',
                        styles.getStarted,
                      )}
                      to={useBaseUrl('docs/thebeat/intro')}>
                      theBeat
                    </Link>
                    <Link
                        className={clsx(
                            'button button--outline button--secondary button--lg',
                            styles.getStarted,
                        )}
                        to={useBaseUrl('docs/thebranch/intro')}>
                        theBranch
                    </Link>
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
