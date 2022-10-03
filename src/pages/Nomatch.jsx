import React from "react";
import { Link } from 'react-router-dom';

export const Nomatch = () => {
	return (
		< >
			<h2>Error 404 page not found.</h2>
			<Link style={{ 'display': 'block', 'textDecoration': 'none', 'color': 'white' }} to='/'
			>Вернуться на главную</Link>
		</>
	);
};