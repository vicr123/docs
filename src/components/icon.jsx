import React from "react";
import Styles from "./icon.module.css";

export default function Icon({name, alt}) {
    return <svg className={Styles.icon} alt={alt}>
        <use href={`/img/cntp-sprites.svg#${name}`} />
    </svg>
}
