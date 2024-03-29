import React, { useEffect, useState } from 'react';

const Fade = ({ show, children }) => {
	const [ shouldRender, setRender ] = useState(show);

	useEffect(
		() => {
			if (show) setRender(true);
		},
		[ show ]
	);

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	return (
		shouldRender && (
			<div style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} .3s` }} onAnimationEnd={onAnimationEnd}>
				{children}
			</div>
		)
	);
};

export default Fade;
