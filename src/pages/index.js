import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, { translate } from "@docusaurus/Translate";
import projects from "../projects";

import Styles from "./index.module.css";

function Project({project}) {
    const baseUrl = useBaseUrl(project.start);
    return <Link to={baseUrl}>
            <div className={Styles.projectLink}>
                <img className={Styles.projectIcon} src={project.icon} />
                <span className={Styles.projectTitle}>{project.name}</span>
                <span className={Styles.projectDescription}>{project.description}</span>
            </div>
        </Link>
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Get help with theDesk, theBeat and more.">
      <main>
      <section className={clsx('hero hero--primary', Styles.heroBanner)}>
        <div className="container">
            <div className={Styles.banner}>
                <Translate
                    id="homepage.splash.welcome"
                    description="Welcome text on the home page">
                    Welcome to the Victor Tran documentation!
                </Translate>
            </div>
        </div>
      </section>
        <section className={Styles.firstSection}>
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
                <div className={Styles.projectLinks}>
                    {projects.map((project, i) => <Project project={project} key={i} />)}
                </div>
            </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
