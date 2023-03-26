import React from "react";
import Icon from "./icon";
import {KeyboardShortcut} from "./keycap";
import Styles from "./command.module.css";

export default function Command({icon, children, shortcut, themed}) {
    return <span className={Styles.command}>
        {icon && <>
            <Icon name={icon} themed={themed} />
            &nbsp;
        </>}
        <b>{children}</b>
        {shortcut && <>
            &nbsp;
            <KeyboardShortcut shortcut={shortcut} />
        </>}
    </span>
}