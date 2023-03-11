import React from "react";
import "./style.css";

export default function Feed(props) {
    return (
        <section className="feed">
            {props.children}
        </section>
    );
}