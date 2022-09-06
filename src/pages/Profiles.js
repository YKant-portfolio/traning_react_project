import { useContext } from "react";
import { Context } from "../context/context";

import Box from '@mui/material/Box';

const boxStyle = {
	display: "flex",
	justifyContent: "center",
	borderRadius: 3,
	marginTop: '10px',
	marginBottom: '60px',
}

export const Profiles = () => {
	const { profile } = useContext(Context);
	// const { id, author, date, raiting, blocked } = profile
	console.log(profile[0]);
	const res = profile.map(item => (
		<li>
			{item.author}
		</li>
	))

	return (
		<Box className='box' sx={{ bgcolor: 'primary.light', minHeight: '200px', minWidth: '300px', maxWidth: '100%', textAlign: 'center', padding: '5px', maxHeight: 380, overflow: 'auto' }}
			{...boxStyle}>
			<ol>
				{res}
			</ol>
		</Box >
	)
}


