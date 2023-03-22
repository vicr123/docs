import React from "react";
import Icon from "./icon";
import {KeyboardShortcut} from "./keycap";

export default function Command({icon, children, shortcut}) {
    return <span>
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