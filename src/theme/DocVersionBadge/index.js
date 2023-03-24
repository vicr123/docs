import React, {useState} from 'react';
import DocVersionBadge from '@theme-original/DocVersionBadge';
import {
    useVersions,
    useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import {useDocsVersion} from "@docusaurus/theme-common/internal";
import Styles from "./index.module.css";
import Icon from "../../components/icon";
import {useLocation} from '@docusaurus/router';


const getVersionMainDoc = (version) =>
    version.docs.find((doc) => doc.id === version.mainDocId);

function VersionSelector({onHide}) {
    const {search, hash} = useLocation();
    const versionMetadata = useDocsVersion();
    const activeDocContext = useActiveDocContext(versionMetadata.pluginId);
    const versions = useVersions(versionMetadata.pluginId);

    return <div className={Styles.scrim} onClick={onHide}>
        <div className={Styles.scrimWrapper}>
            <div className={Styles.selector} onClick={e => e.stopPropagation()}>
                <div className={Styles.header}>
                    <h3>Select Version</h3>
                    <a className={Styles.closeButton} onClick={onHide}>Close</a>
                </div>
                <div className={Styles.versionList}>
                    {versions.map(x => {
                        // We try to link to the same doc, in another version
                        // When not possible, fallback to the "main doc" of the version
                        const versionDoc =
                            activeDocContext.alternateDocVersions[x.name] ??
                            getVersionMainDoc(x);

                        return <a className={Styles.versionItem} href={`${versionDoc.path}${search}${hash}`}>
                            <Icon name="arrow-right"/>
                            {x.label}
                            {x.isLast && <Icon name="default"/>}
                        </a>;
                    })}
                </div>
            </div>
        </div>
    </div>
}

export default function DocVersionBadgeWrapper(props) {
    const [showVersionSelector, setShowVersionSelector] = useState(false);

    return <>
        <div className={Styles.badgeWrapper} onClick={() => setShowVersionSelector(true)}>
            <DocVersionBadge {...props} />
        </div>
        {showVersionSelector && <VersionSelector onHide={() => setShowVersionSelector(false)} />}
    </>;
}
