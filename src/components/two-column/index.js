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
		<section className="two-column">
			<div className="two-column-left">
				{left}
			</div>
			<div className="two-column-right">
				{right}
			</div>
		</section>
	);
}