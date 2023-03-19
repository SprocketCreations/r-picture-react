import React, { useState } from "react";
import "./style.css";

/**
 * @typedef {object} TwoColumnProps
 * @property {any} left The element to put in the left column.
 * @property {any?} right The element to put in the right column.
 * @property {boolean?} stack True if the columns should stack vetically on smaller screens.
 */
/**
 * @param {TwoColumnProps} props 
 * @returns 
 */
export default function TwoColumn({ left, right, stack = false }) {
	const [showSidePanel, setShowSidePanel] = useState(false);

	const noRight = !right;
	
	stack = noRight || stack;

	const showMain = stack || !showSidePanel;
	const showFoot = stack || showSidePanel;


	return (
		<>
			<main className={`two-column ${showMain ? "" : "hide"} ${stack ? "" : "dont-stack"}`}>
				{stack || <button onClick={() => setShowSidePanel(true)} className="two-column-button">◀</button>}
				{left}
			</main>
			<footer className={`two-column ${showFoot ? "" : "hide" } ${stack ? "" : "dont-stack"} ${noRight ? "hide" : ""}`}>
				{stack || <button onClick={() => setShowSidePanel(false)} className="two-column-button">▶</button>}
				{right}
			</footer>
		</>
	);
}