import React from "react";
import Icon from "./icon";
import {KeyboardShortcut} from "./keycap";
import Styles from "./command.module.css";

export default function Command({icon, children, shortcut}) {
    return <span className={Styles.command}>
        {icon && <>
            <Icon name={icon} />
            &nbsp;
        </>}
        <b>{children}</b>
        {shortcut && <>
            &nbsp;
            <KeyboardShortcut shortcut={shortcut} />
        </>}
    </span>
}