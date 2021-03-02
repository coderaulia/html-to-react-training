import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
	const className = ["button"]; //menambahkan class
	if (props.isPrimary) className.push("button-primary");
	if (props.isWideMobile) className.push("button-wide-mobile");
	if (props.isPrimary) className.push("button-sm");
	if (props.isBlock) className.push("button-block");

	return <button className={className.join(" ")}>{props.children}</button>;
}

Button.propTypes = {
	isPrimary: propTypes.bool,
	isSmall: propTypes.bool,
	isWideMobile: propTypes.bool,
	isBlock: propTypes.bool,
};
