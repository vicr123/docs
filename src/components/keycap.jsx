import React from 'react';
import Styles from './keycap.module.css';

function KeycapContainer({children, className}) {
    return <span className={`${Styles.keycapContainer} ${className}`}>{children}</span>
}

function Keycap({children}) {
    return <span className={Styles.keycap}>{children}</span>
}

function KeyboardShortcut({shortcut}) {
    return <KeycapContainer className={Styles.inlineKeycapContainer}>
        {shortcut.map((x, i) => {
            let key = x;
            let isMac = navigator.userAgent.toLowerCase().includes("mac");

            if (isMac) {
                if (x === "CTRL") key = "⌘";
                if (x === "ALT") key = "⌥";
            }
            return <Keycap key={i}>{key}</Keycap>;
        })}
    </KeycapContainer>
}

export { KeycapContainer, Keycap, KeyboardShortcut };