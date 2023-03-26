import React from "react";
import Styles from "./icon.module.css";

export default function Icon({name, alt, themed = true}) {
    return <svg className={`${Styles.icon} ${themed ? Styles.themed : ""}`} alt={alt}>
        <use href={`/img/cntp-sprites.svg#${name}`} />
    </svg>
}
