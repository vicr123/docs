import React from 'react';
import DocPage from '@theme-original/DocPage';
import Head from "@docusaurus/core/lib/client/exports/Head";
import { useLocation } from "react-router-dom";

export default function DocPageWrapper(props) {
    const loc = useLocation();
    const project = loc.pathname.split("/")[2];

    return (
        <>
            <Head>
                <meta name="project" content={project} />
            </Head>
            <DocPage {...props} />
        </>
    );
}
