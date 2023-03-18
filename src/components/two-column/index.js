import React from "react";
import "./style.css";

/**
 * @typedef {object} TwoColumnProps
 * @property {any} left The element to put in the left column.
 * @property {any} right The element to put in the right column.
 */
/**
 * @param {TwoColumnProps} props 
 * @returns 
 */
export default function TwoColumn({left, right}) {
	return (
		<>
			<main className="two-column">
				{left}
			</main>
			<footer className="two-column">
				{right}
			</footer>
		</>
	);
}