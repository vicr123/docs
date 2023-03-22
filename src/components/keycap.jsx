import React from 'react';
import Styles from './keycap.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser'

function KeycapContainer({children, className}) {
    return <span className={`${Styles.keycapContainer} ${className}`}>{children}</span>
}

function Keycap({children}) {
    return <span className={Styles.keycap}>{children}</span>
}

function KeyboardShortcut({shortcut}) {
    const isBrowser = useIsBrowser();
    return <KeycapContainer className={Styles.inlineKeycapContainer}>
        {shortcut.map((x, i) => {
            let key = x;

            if (x === "LEFT") key = "←";
            if (x === "RIGHT") key = "→";
            if (x === "UP") key = "↑";
            if (x === "DOWN") key = "↓";
            if (x === "RETURN") key = "ENTER";

            let isMac = isBrowser && navigator.userAgent.toLowerCase().includes("mac");
            if (isMac) {
                if (x === "CTRL") key = "⌘";
                if (x === "ALT") key = "⌥";
                if (x === "RETURN") key = "↩";
            }
            return <Keycap key={i}>{key}</Keycap>
        })}
    </KeycapContainer>
}

export { KeycapContainer, Keycap, KeyboardShortcut };